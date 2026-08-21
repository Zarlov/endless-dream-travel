<?php
namespace Espo\Modules\EndlessDreamTravel\Tools\PaymentReminder;

use DateTimeImmutable;
use Espo\Core\Field\LinkParent;
use Espo\Core\Mail\EmailSender;
use Espo\Core\Utils\Config;
use Espo\Entities\Email;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;
use Espo\Core\Utils\Log;

class ReminderService
{
    private const TEMPLATE_NAME = 'Endless Dream Travel - Final Payment Reminder';
    private const DEFAULT_DAYS = ['30', '14', '7', '3', '1'];

    public function __construct(
        private EntityManager $entityManager,
        private EmailSender $emailSender,
        private Config $config,
        private Log $logger,
    ) {}

    public function runDaily(bool $send = true): array
    {
        $template = $this->ensureTemplate();
        $today = new DateTimeImmutable('today');
        $entriesByUser = [];
        $scheduledSent = 0;
        $scheduledSkipped = 0;

        $bookings = $this->entityManager->getRDBRepository('EdtBooking')
            ->where(['paymentReminderEnabled' => true, 'paymentReminderStatus' => 'Active'])
            ->find();

        foreach ($bookings as $booking) {
            $dueRaw = $booking->get('finalPaymentDueDate');
            $balance = (float) ($booking->get('balanceDue') ?? 0);
            if (!$dueRaw || $balance <= 0 || in_array($booking->get('status'), ['Canceled', 'Completed', 'Removed from Live Source'], true)) {
                continue;
            }

            $due = new DateTimeImmutable((string) $dueRaw);
            $daysUntil = (int) $today->diff($due)->format('%r%a');
            if ($daysUntil > 30) {
                continue;
            }

            $recipientData = $this->getClientRecipients($booking);
            $entry = $this->buildSummaryEntry($booking, $daysUntil, $recipientData['missingNames']);
            $internalUser = $this->getInternalRecipient($booking);
            if ($internalUser && $internalUser->get('emailAddress')) {
                $entriesByUser[$internalUser->getId()] ??= ['user' => $internalUser, 'entries' => []];
                $entriesByUser[$internalUser->getId()]['entries'][] = $entry;
            } else {
                $this->logger->warning('Payment reminder has no internal recipient email for Booking ' . $booking->getId());
            }

            $days = array_map('strval', $booking->get('reminderDays') ?: self::DEFAULT_DAYS);
            $historyKey = (string) $dueRaw . ':' . $daysUntil;
            $history = $this->decodeHistory($booking);
            if (!$booking->get('clientRemindersEnabled') || !in_array((string) $daysUntil, $days, true) || in_array($historyKey, $history, true)) {
                continue;
            }

            $result = $this->sendClientReminder($booking, $template, $recipientData, $send);
            if ($result['sent']) {
                $history[] = $historyKey;
                $this->recordSent($booking, $history, $daysUntil === 1 ? '1 Day' : $daysUntil . ' Days');
                $scheduledSent++;
            } else {
                $scheduledSkipped++;
            }
        }

        $digestSent = 0;
        foreach ($entriesByUser as $group) {
            if ($send && $this->emailSender->hasSystemSmtp()) {
                $this->sendDigest($group['user'], $group['entries']);
                $digestSent++;
            }
        }

        $result = [
            'smtpConfigured' => $this->emailSender->hasSystemSmtp(),
            'digestRecipientCount' => count($entriesByUser),
            'bookingCount' => array_sum(array_map(fn ($group) => count($group['entries']), $entriesByUser)),
            'digestSent' => $digestSent,
            'clientRemindersSent' => $scheduledSent,
            'clientRemindersSkipped' => $scheduledSkipped,
            'testMode' => !$send,
        ];

        $this->logger->info('Final payment reminder daily review: ' . json_encode($result));
        return $result;
    }

    public function sendNow(Entity $booking, bool $send = true): array
    {
        $template = $this->ensureTemplate();
        $recipientData = $this->getClientRecipients($booking);
        $result = $this->sendClientReminder($booking, $template, $recipientData, $send);

        if ($result['sent']) {
            $history = $this->decodeHistory($booking);
            $history[] = 'manual:' . (new DateTimeImmutable())->format('Y-m-d H:i:s');
            $this->recordSent($booking, $history, 'Manual');
        }

        return $result + ['bookingId' => $booking->getId(), 'testMode' => !$send];
    }

    private function sendClientReminder(Entity $booking, Entity $template, array $recipientData, bool $send): array
    {
        $addresses = $recipientData['addresses'];
        if (!$addresses) {
            return ['sent' => false, 'smtpConfigured' => $this->emailSender->hasSystemSmtp(), 'recipientCount' => 0, 'missingClients' => $recipientData['missingNames'], 'reason' => 'No client recipient has an email address.'];
        }

        $body = $this->renderTemplate((string) $template->get('body'), $booking, $recipientData['firstName']);
        $subject = $this->renderTemplate((string) $template->get('subject'), $booking, $recipientData['firstName'], true);

        if (!$send || !$this->emailSender->hasSystemSmtp()) {
            return ['sent' => false, 'smtpConfigured' => $this->emailSender->hasSystemSmtp(), 'recipientCount' => count($addresses), 'missingClients' => $recipientData['missingNames'], 'reason' => $send ? 'Outbound email is not configured.' : 'Test mode; no email sent.', 'subject' => $subject];
        }

        $email = $this->entityManager->getRDBRepositoryByClass(Email::class)->getNew();
        foreach ($addresses as $address) {
            $email->addToAddress($address);
        }
        $email->setSubject($subject);
        $email->setBody($body);
        $email->setIsHtml();
        $email->setParent(LinkParent::fromEntity($booking));
        $this->emailSender->send($email);

        return ['sent' => true, 'smtpConfigured' => true, 'recipientCount' => count($addresses), 'missingClients' => $recipientData['missingNames'], 'reason' => null, 'subject' => $subject];
    }

    private function getClientRecipients(Entity $booking): array
    {
        $contacts = $this->entityManager->getRDBRepository('EdtBooking')
            ->getRelation($booking, 'clientReminderRecipients')
            ->find();

        if (!count($contacts) && $booking->get('primaryTravelerId')) {
            $primary = $this->entityManager->getEntityById('Contact', (string) $booking->get('primaryTravelerId'));
            $contacts = $primary ? [$primary] : [];
        }

        $addresses = [];
        $missingNames = [];
        $firstName = 'Traveler';
        foreach ($contacts as $index => $contact) {
            if ($index === 0) {
                $firstName = (string) ($contact->get('firstName') ?: $contact->get('name') ?: 'Traveler');
            }
            $address = trim((string) $contact->get('emailAddress'));
            if ($address) {
                $addresses[] = $address;
            } else {
                $missingNames[] = (string) ($contact->get('name') ?: $contact->getId());
            }
        }

        return ['addresses' => array_values(array_unique($addresses)), 'missingNames' => $missingNames, 'firstName' => $firstName];
    }

    private function getInternalRecipient(Entity $booking): ?Entity
    {
        $id = $booking->get('paymentReminderRecipientId') ?: $booking->get('assignedUserId');
        if ($id) {
            $user = $this->entityManager->getEntityById('User', (string) $id);
            if ($user) {
                return $user;
            }
        }

        return $this->entityManager->getRDBRepository('User')
            ->where(['userName' => 'ddriver', 'isActive' => true])
            ->findOne();
    }

    private function buildSummaryEntry(Entity $booking, int $daysUntil, array $missingNames): array
    {
        $vendor = $booking->get('supplierId') ? $this->entityManager->getEntityById('Account', (string) $booking->get('supplierId')) : null;
        return [
            'name' => (string) $booking->get('name'),
            'id' => (string) $booking->getId(),
            'vendor' => (string) ($vendor?->get('edtVendorEmailName') ?: $vendor?->get('name') ?: 'Not selected'),
            'due' => (string) $booking->get('finalPaymentDueDate'),
            'daysUntil' => $daysUntil,
            'balance' => (float) ($booking->get('balanceDue') ?? 0),
            'missingNames' => $missingNames,
        ];
    }

    private function sendDigest(Entity $user, array $entries): void
    {
        $siteUrl = rtrim((string) $this->config->get('siteUrl'), '/');
        $rows = '';
        foreach ($entries as $entry) {
            $missing = $entry['missingNames'] ? '<div style="color:#b42318;font-weight:700">Missing email: ' . $this->esc(implode(', ', $entry['missingNames'])) . '</div>' : '<span style="color:#067647">Email available</span>';
            $timing = $entry['daysUntil'] < 0 ? abs($entry['daysUntil']) . ' days overdue' : $entry['daysUntil'] . ' days remaining';
            $rows .= '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><a href="' . $this->esc($siteUrl . '/#EdtBooking/view/' . $entry['id']) . '">' . $this->esc($entry['name']) . '</a></td><td style="padding:10px;border-bottom:1px solid #ddd">' . $this->esc($entry['vendor']) . '</td><td style="padding:10px;border-bottom:1px solid #ddd">' . $this->formatDate($entry['due']) . '<br>' . $this->esc($timing) . '</td><td style="padding:10px;border-bottom:1px solid #ddd;text-align:right">' . $this->money($entry['balance']) . '</td><td style="padding:10px;border-bottom:1px solid #ddd">' . $missing . '</td></tr>';
        }

        $body = '<div style="font-family:Arial,sans-serif;color:#1f2937"><img src="' . $this->esc($siteUrl . '/client/custom/modules/endless-dream-travel/img/logo-light.png') . '" alt="Endless Dream Travel" style="max-width:260px;height:auto"><h2>Final Payment Daily Summary</h2><p>The following Bookings are due within 30 days or are overdue.</p><table style="border-collapse:collapse;width:100%"><thead><tr style="background:#173f67;color:#fff"><th style="padding:10px;text-align:left">Booking</th><th style="padding:10px;text-align:left">Vendor</th><th style="padding:10px;text-align:left">Due</th><th style="padding:10px;text-align:right">Balance</th><th style="padding:10px;text-align:left">Client email</th></tr></thead><tbody>' . $rows . '</tbody></table></div>';
        $email = $this->entityManager->getRDBRepositoryByClass(Email::class)->getNew();
        $email->addToAddress((string) $user->get('emailAddress'));
        $email->setSubject('Endless Dream Travel - Final Payment Daily Summary');
        $email->setBody($body);
        $email->setIsHtml();
        $this->emailSender->send($email);
    }

    private function ensureTemplate(): Entity
    {
        $template = $this->entityManager->getRDBRepository('EmailTemplate')->where(['name' => self::TEMPLATE_NAME])->findOne();
        if ($template) {
            return $template;
        }

        $template = $this->entityManager->getRDBRepository('EmailTemplate')->getNew();
        $template->set([
            'name' => self::TEMPLATE_NAME,
            'subject' => 'Final payment reminder for {{bookingName}}',
            'status' => 'Active',
            'isHtml' => true,
            'description' => 'Editable transactional template used by the Endless Dream Travel final-payment reminder service.',
            'body' => '<div style="margin:0;padding:24px;background:#f4f7fa;font-family:Arial,sans-serif;color:#243447"><div style="max-width:680px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #d9e2ec"><div style="padding:22px 28px;background:#173f67"><img src="{{logoUrl}}" alt="Endless Dream Travel" style="max-width:280px;height:auto"></div><div style="padding:30px"><p>Hello {{clientName}},</p><p>This is a friendly reminder that the final payment for your upcoming travel booking is due on <strong>{{finalPaymentDueDate}}</strong>.</p><table style="width:100%;border-collapse:collapse;margin:22px 0"><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Trip</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{tripName}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Booking</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{bookingName}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Vendor</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{vendorLongName}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Confirmation</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{confirmationNumber}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Total booking cost</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{grossSale}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Amount paid</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb">{{amountPaid}}</td></tr><tr><td style="padding:9px;border-bottom:1px solid #e5e7eb"><strong>Balance due</strong></td><td style="padding:9px;border-bottom:1px solid #e5e7eb;color:#b54708"><strong>{{balanceDue}}</strong></td></tr></table><p>Please contact us if you have questions or need assistance completing payment.</p><p>Warm regards,<br><strong>Endless Dream Travel</strong></p></div></div></div>',
        ]);
        $this->entityManager->saveEntity($template);
        return $template;
    }

    private function renderTemplate(string $value, Entity $booking, string $clientName, bool $plain = false): string
    {
        $trip = $booking->get('tripId') ? $this->entityManager->getEntityById('EdtTrip', (string) $booking->get('tripId')) : null;
        $vendor = $booking->get('supplierId') ? $this->entityManager->getEntityById('Account', (string) $booking->get('supplierId')) : null;
        $siteUrl = rtrim((string) $this->config->get('siteUrl'), '/');
        $data = [
            '{{logoUrl}}' => $siteUrl . '/client/custom/modules/endless-dream-travel/img/logo-light.png',
            '{{clientName}}' => $clientName,
            '{{tripName}}' => (string) ($trip?->get('name') ?: 'Your upcoming trip'),
            '{{bookingName}}' => (string) ($booking->get('name') ?: 'Travel booking'),
            '{{vendorLongName}}' => (string) ($vendor?->get('edtVendorEmailName') ?: $vendor?->get('name') ?: 'Travel vendor'),
            '{{confirmationNumber}}' => (string) ($booking->get('confirmationNumber') ?: 'Pending'),
            '{{grossSale}}' => $this->money((float) ($booking->get('grossSale') ?? 0)),
            '{{amountPaid}}' => $this->money((float) ($booking->get('amountPaidToSupplier') ?? 0)),
            '{{balanceDue}}' => $this->money((float) ($booking->get('balanceDue') ?? 0)),
            '{{finalPaymentDueDate}}' => $this->formatDate((string) $booking->get('finalPaymentDueDate')),
        ];
        if (!$plain) {
            $data = array_map(fn ($item) => $this->esc($item), $data);
        }
        return strtr($value, $data);
    }

    private function recordSent(Entity $booking, array $history, string $label): void
    {
        $labels = array_values(array_unique(array_merge($booking->get('remindersSent') ?: [], [$label])));
        $booking->set('paymentReminderHistory', json_encode(array_values(array_unique($history))));
        $booking->set('remindersSent', $labels);
        $booking->set('lastReminderDate', (new DateTimeImmutable())->format('Y-m-d'));
        $this->entityManager->saveEntity($booking);
    }

    private function decodeHistory(Entity $booking): array
    {
        $raw = $booking->get('paymentReminderHistory');
        if (!$raw) {
            return [];
        }
        $decoded = json_decode((string) $raw, true);
        return is_array($decoded) ? $decoded : [];
    }

    private function formatDate(string $value): string
    {
        return $value ? (new DateTimeImmutable($value))->format('m/d/y') : 'Not set';
    }

    private function money(float $value): string
    {
        return '$' . number_format($value, 2);
    }

    private function esc(string $value): string
    {
        return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }
}

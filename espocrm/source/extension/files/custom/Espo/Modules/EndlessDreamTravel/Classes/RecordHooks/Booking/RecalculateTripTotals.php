<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Booking;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class RecalculateTripTotals implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $tripIdList = [];

        if ($entity->getEntityType() === 'EdtCommission') {
            $bookingIdList = array_values(array_unique(array_filter([
                $entity->get('bookingId'),
                $entity->getFetched('bookingId'),
            ])));

            foreach ($bookingIdList as $bookingId) {
                $booking = $this->entityManager->getEntityById('EdtBooking', (string) $bookingId);
                if ($booking && $booking->get('tripId')) {
                    $tripIdList[] = $booking->get('tripId');
                }
            }
        } else {
            $tripIdList = array_filter([
                $entity->get('tripId'),
                $entity->getFetched('tripId'),
            ]);
        }

        $tripIdList = array_values(array_unique($tripIdList));

        foreach ($tripIdList as $tripId) {
            $this->recalculate((string) $tripId);
        }
    }

    private function recalculate(string $tripId): void
    {
        $trip = $this->entityManager->getEntityById('EdtTrip', $tripId);
        if (!$trip) {
            return;
        }

        $gross = 0.0;
        $balance = 0.0;
        $expectedCommission = 0.0;
        $receivedCommission = 0.0;
        $count = 0;
        $bookingList = $this->entityManager
            ->getRDBRepository('EdtBooking')
            ->where(['tripId' => $tripId])
            ->find();

        foreach ($bookingList as $booking) {
            $bookingReceivedCommission = 0.0;
            $commissionList = $this->entityManager
                ->getRDBRepository('EdtCommission')
                ->where(['bookingId' => $booking->getId()])
                ->find();

            foreach ($commissionList as $commission) {
                if ($commission->get('status') !== 'Received') {
                    continue;
                }

                $bookingReceivedCommission += (float) ($commission->get('receivedAmount') ?? 0);
            }

            $bookingExpectedCommission = (float) ($booking->get('expectedCommission') ?? 0);
            $isPaidFromCommissions = $bookingReceivedCommission > 0 &&
                ($bookingExpectedCommission <= 0 || $bookingReceivedCommission >= $bookingExpectedCommission);
            $bookingIsPaid = (bool) $booking->get('commissionPaidFlag');

            if ($isPaidFromCommissions && !$bookingIsPaid) {
                $booking->set('commissionPaidFlag', true);
                $this->entityManager->saveEntity($booking);
                $bookingIsPaid = true;
            }

            $bookingReceivedForRollup = $bookingReceivedCommission > 0
                ? $bookingReceivedCommission
                : ($bookingIsPaid ? $bookingExpectedCommission : 0.0);

            if (!$booking->get('reportableSale')) {
                continue;
            }

            if (in_array($booking->get('status'), ['Canceled', 'Removed from Live Source'], true)) {
                continue;
            }

            $count++;
            $gross += (float) ($booking->get('grossSale') ?? 0);
            $balance += (float) ($booking->get('balanceDue') ?? 0);
            $expectedCommission += $bookingExpectedCommission;
            $receivedCommission += $bookingReceivedForRollup;
        }

        $trip->set([
            'componentCount' => $count,
            'grossComponentValue' => $gross,
            'balanceDueTotal' => $balance,
            'expectedCommissionTotal' => $expectedCommission,
            'receivedCommissionTotal' => $receivedCommission,
        ]);
        $this->entityManager->saveEntity($trip);
    }
}

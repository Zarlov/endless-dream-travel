<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Booking;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;

class CalculateBalanceDue implements SaveHook
{
    public function process(Entity $entity): void
    {
        $grossSale = (float) ($entity->get('grossSale') ?? 0);
        $amountPaid = (float) ($entity->get('amountPaidToSupplier') ?? 0);

        $balanceDue = round(max(0, $grossSale - $amountPaid), 2);
        $entity->set('balanceDue', $balanceDue);
        $entity->set('finalPaymentReceived', $grossSale > 0 && $balanceDue <= 0);

        if ($grossSale > 0 && $balanceDue <= 0) {
            $entity->set('paymentReminderStatus', 'Completed');
        } elseif ($balanceDue > 0 && $entity->get('paymentReminderStatus') === 'Completed') {
            $entity->set('paymentReminderStatus', 'Active');
        }
    }
}

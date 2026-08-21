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

        $entity->set('balanceDue', round(max(0, $grossSale - $amountPaid), 2));
    }
}

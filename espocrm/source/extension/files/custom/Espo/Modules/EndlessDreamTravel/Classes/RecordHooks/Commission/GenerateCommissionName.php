<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Commission;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class GenerateCommissionName implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $commission): void
    {
        $bookingId = $commission->get('bookingId');
        if (!$bookingId) {
            return;
        }

        $booking = $this->entityManager->getEntityById('EdtBooking', (string) $bookingId);
        if (!$booking) {
            return;
        }

        $commission->set('name', substr('COMM - ' . (string) $booking->get('name'), 0, 180));
    }
}

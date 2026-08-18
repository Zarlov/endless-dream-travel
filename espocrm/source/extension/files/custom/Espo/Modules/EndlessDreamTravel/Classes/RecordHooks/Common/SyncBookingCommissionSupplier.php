<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Common;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class SyncBookingCommissionSupplier implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        if ($entity->getEntityType() === 'EdtCommission') {
            $this->syncFromCommission($entity);
            return;
        }

        if ($entity->getEntityType() === 'EdtBooking') {
            $this->syncFromBooking($entity);
        }
    }

    private function syncFromCommission(Entity $commission): void
    {
        $bookingId = $commission->get('bookingId');
        if (!$bookingId) {
            return;
        }

        $booking = $this->entityManager->getEntityById('EdtBooking', (string) $bookingId);
        if (!$booking) {
            return;
        }

        $commissionSupplierId = $commission->get('supplierId');
        $bookingSupplierId = $booking->get('supplierId');

        if (!$commissionSupplierId && $bookingSupplierId) {
            $commission->set('supplierId', $bookingSupplierId);
            return;
        }

        if ($commissionSupplierId && !$bookingSupplierId) {
            $booking->set('supplierId', $commissionSupplierId);
            $this->entityManager->saveEntity($booking);
        }
    }

    private function syncFromBooking(Entity $booking): void
    {
        if (!$booking->hasId()) {
            return;
        }

        $commissionList = $this->entityManager
            ->getRDBRepository('EdtCommission')
            ->where(['bookingId' => $booking->getId()])
            ->find();

        $bookingSupplierId = $booking->get('supplierId');

        if (!$bookingSupplierId) {
            foreach ($commissionList as $commission) {
                if ($commission->get('supplierId')) {
                    $booking->set('supplierId', $commission->get('supplierId'));
                    return;
                }
            }
            return;
        }

        foreach ($commissionList as $commission) {
            if ($commission->get('supplierId')) {
                continue;
            }

            $commission->set('supplierId', $bookingSupplierId);
            $this->entityManager->saveEntity($commission);
        }
    }
}

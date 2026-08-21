<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Booking;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class SyncVendorClients implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $booking = $entity;
        if ($entity->getEntityType() === 'EdtBookingTraveler') {
            $booking = $entity->get('bookingId')
                ? $this->entityManager->getEntityById('EdtBooking', (string) $entity->get('bookingId'))
                : null;
        }

        if (!$booking) {
            return;
        }

        if (!$booking->hasId() || !$booking->get('supplierId')) {
            return;
        }

        $vendor = $this->entityManager->getEntityById('Account', (string) $booking->get('supplierId'));
        if (!$vendor) {
            return;
        }

        $clientIds = array_filter([$booking->get('primaryTravelerId')]);
        if ($booking->get('householdId')) {
            $members = $this->entityManager->getRDBRepository('Contact')
                ->where(['householdId' => $booking->get('householdId')])
                ->find();
            foreach ($members as $member) {
                $clientIds[] = $member->getId();
            }
        }

        $travelers = $this->entityManager->getRDBRepository('EdtBookingTraveler')
            ->where(['bookingId' => $booking->getId()])
            ->find();
        foreach ($travelers as $traveler) {
            $clientIds[] = $traveler->get('contactId');
        }

        $relation = $this->entityManager->getRDBRepository('Account')->getRelation($vendor, 'edtClients');
        foreach (array_unique(array_filter($clientIds)) as $clientId) {
            $client = $this->entityManager->getEntityById('Contact', (string) $clientId);
            if ($client) {
                $relation->relate($client);
                if ($client->get('travelerStatus') === 'Prospect') {
                    $client->set('travelerStatus', 'Customer');
                    $this->entityManager->saveEntity($client);
                }
            }
        }
    }
}

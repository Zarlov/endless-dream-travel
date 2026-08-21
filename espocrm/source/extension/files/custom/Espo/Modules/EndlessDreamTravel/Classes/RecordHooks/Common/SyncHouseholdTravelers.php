<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Common;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class SyncHouseholdTravelers implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        if (!$entity->hasId() || !$entity->get('householdId')) {
            return;
        }

        $members = $this->entityManager->getRDBRepository('Contact')
            ->where(['householdId' => $entity->get('householdId')])
            ->find();

        if ($entity->getEntityType() === 'EdtTrip') {
            foreach ($members as $member) {
                $this->ensureTraveler('EdtTripTraveler', 'tripId', $entity, $member, $entity->get('primaryTravelerId'));
            }
            return;
        }

        if ($entity->getEntityType() === 'EdtBooking') {
            foreach ($members as $member) {
                $this->ensureTraveler('EdtBookingTraveler', 'bookingId', $entity, $member, $entity->get('primaryTravelerId'));
            }
            return;
        }

        if ($entity->getEntityType() === 'EdtQuote') {
            $relation = $this->entityManager->getRDBRepository('EdtQuote')->getRelation($entity, 'clients');
            foreach ($members as $member) {
                $relation->relate($member);
            }
        }
    }

    private function ensureTraveler(string $type, string $parentField, Entity $parent, Entity $contact, mixed $primaryId): void
    {
        $existing = $this->entityManager->getRDBRepository($type)
            ->where([$parentField => $parent->getId(), 'contactId' => $contact->getId()])
            ->findOne();
        if ($existing) {
            return;
        }

        $traveler = $this->entityManager->getNewEntity($type);
        $traveler->set([
            $parentField => $parent->getId(),
            'contactId' => $contact->getId(),
            'name' => (string) $contact->get('name'),
            'travelerRole' => $contact->getId() === $primaryId ? 'Primary' : 'Traveler',
        ]);
        $this->entityManager->saveEntity($traveler);
    }
}

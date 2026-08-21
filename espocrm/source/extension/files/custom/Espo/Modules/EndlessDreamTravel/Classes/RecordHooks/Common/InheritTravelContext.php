<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Common;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class InheritTravelContext implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $type = $entity->getEntityType();

        if ($type === 'EdtTrip') {
            $this->fillFromHousehold($entity, 'primaryTravelerId');
            return;
        }

        if ($type === 'EdtBooking') {
            if (!$entity->get('bookingYear')) {
                $entity->set('bookingYear', (int) date('Y'));
            }

            $parent = $this->getEntity('EdtBooking', $entity->get('parentComponentId'));
            if ($parent) {
                $this->copy($parent, $entity, ['tripId', 'householdId', 'primaryTravelerId', 'supplierId', 'travelStartDate', 'travelEndDate']);
            }

            $trip = $this->getEntity('EdtTrip', $entity->get('tripId'));
            if ($trip) {
                $this->copy($trip, $entity, ['householdId', 'primaryTravelerId', 'travelStartDate', 'travelEndDate']);
            }

            $this->fillFromHousehold($entity, 'primaryTravelerId');
            return;
        }

        if ($type === 'EdtQuote') {
            $booking = $this->getEntity('EdtBooking', $entity->get('bookingId'));
            if ($booking) {
                $this->copy($booking, $entity, ['householdId', 'supplierId', 'travelStartDate', 'travelEndDate']);
                if (!$entity->get('primaryContactId') && $booking->get('primaryTravelerId')) {
                    $entity->set('primaryContactId', $booking->get('primaryTravelerId'));
                }
                if (!$entity->get('convertedTripId') && $booking->get('tripId')) {
                    $entity->set('convertedTripId', $booking->get('tripId'));
                }
            }

            $trip = $this->getEntity('EdtTrip', $entity->get('convertedTripId'));
            if ($trip) {
                $this->copy($trip, $entity, ['householdId', 'travelStartDate', 'travelEndDate']);
                if (!$entity->get('primaryContactId') && $trip->get('primaryTravelerId')) {
                    $entity->set('primaryContactId', $trip->get('primaryTravelerId'));
                }
            }

            $this->fillFromHousehold($entity, 'primaryContactId');
        }
    }

    private function fillFromHousehold(Entity $entity, string $primaryField): void
    {
        if ($entity->get($primaryField) || !$entity->get('householdId')) {
            return;
        }

        $household = $this->getEntity('EdtHousehold', $entity->get('householdId'));
        if ($household && $household->get('primaryTravelerId')) {
            $entity->set($primaryField, $household->get('primaryTravelerId'));
        }
    }

    private function copy(Entity $source, Entity $target, array $fieldList): void
    {
        foreach ($fieldList as $field) {
            if (!$target->get($field) && $source->get($field)) {
                $target->set($field, $source->get($field));
            }
        }
    }

    private function getEntity(string $type, mixed $id): ?Entity
    {
        return $id ? $this->entityManager->getEntityById($type, (string) $id) : null;
    }
}

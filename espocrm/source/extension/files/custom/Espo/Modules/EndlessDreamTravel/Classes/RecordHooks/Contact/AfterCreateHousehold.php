<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Contact;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class AfterCreateHousehold implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        if (!$entity->get('edtAutoCreateHousehold') || $entity->get('householdId')) {
            return;
        }

        $baseName = trim((string) ($entity->get('lastName') ?: $entity->get('name')));
        $household = $this->entityManager->getNewEntity('EdtHousehold');
        $household->set([
            'name' => ($baseName ?: 'New Traveler') . ' Household',
            'externalId' => 'HH-' . strtoupper(bin2hex(random_bytes(5))),
            'primaryTravelerId' => $entity->getId(),
            'importReviewStatus' => 'Ready',
            'assignedUserId' => $entity->get('assignedUserId'),
        ]);
        $this->entityManager->saveEntity($household);

        $entity->set([
            'householdId' => $household->getId(),
            'isPrimaryHouseholdContact' => true,
        ]);
        $this->entityManager->saveEntity($entity);
    }
}

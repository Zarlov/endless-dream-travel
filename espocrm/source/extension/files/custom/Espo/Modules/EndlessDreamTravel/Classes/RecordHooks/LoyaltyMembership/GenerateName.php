<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\LoyaltyMembership;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class GenerateName implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $client = $entity->get('contactId')
            ? $this->entityManager->getEntityById('Contact', (string) $entity->get('contactId'))
            : null;
        $vendor = $entity->get('supplierId')
            ? $this->entityManager->getEntityById('Account', (string) $entity->get('supplierId'))
            : null;

        $parts = array_filter([
            $client?->get('name'),
            $vendor?->get('name') ?: $entity->get('programName'),
            $entity->get('membershipNumber'),
        ]);
        $entity->set('name', substr(implode(' - ', $parts) ?: 'Loyalty Membership', 0, 180));
    }
}

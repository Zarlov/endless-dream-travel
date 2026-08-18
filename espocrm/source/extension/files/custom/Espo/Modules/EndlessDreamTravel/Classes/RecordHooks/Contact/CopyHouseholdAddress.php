<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Contact;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class CopyHouseholdAddress implements SaveHook
{
    private const ADDRESS_FIELDS = [
        'edtAddressLine1',
        'edtAddressLine2',
        'edtCity',
        'edtState',
        'edtPostalCode',
        'edtCountry',
    ];

    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $householdId = $entity->get('householdId');
        if (!$entity->get('edtUseHouseholdAddress') || !$householdId) {
            return;
        }

        $members = $this->entityManager
            ->getRDBRepository('Contact')
            ->where(['householdId' => $householdId])
            ->find();

        foreach ($members as $member) {
            if ($entity->getId() && $member->getId() === $entity->getId()) {
                continue;
            }

            $hasAddress = false;
            foreach (self::ADDRESS_FIELDS as $field) {
                if ($member->get($field)) {
                    $hasAddress = true;
                    break;
                }
            }

            if (!$hasAddress) {
                continue;
            }

            foreach (self::ADDRESS_FIELDS as $field) {
                if (!$entity->get($field) && $member->get($field)) {
                    $entity->set($field, $member->get($field));
                }
            }
            return;
        }
    }
}

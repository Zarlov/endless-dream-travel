<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Trip;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;

class DefaultEndDate implements SaveHook
{
    public function process(Entity $entity): void
    {
        if (!$entity->get('travelEndDate') && $entity->get('travelStartDate')) {
            $entity->set('travelEndDate', $entity->get('travelStartDate'));
        }
    }
}

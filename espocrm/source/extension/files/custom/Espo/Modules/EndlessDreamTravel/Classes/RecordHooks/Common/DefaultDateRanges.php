<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Common;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;

class DefaultDateRanges implements SaveHook
{
    private const PAIRS = [
        'EdtTrip' => [['travelStartDate', 'travelEndDate']],
        'EdtBooking' => [['travelStartDate', 'travelEndDate'], ['serviceStartDate', 'serviceEndDate']],
        'EdtQuote' => [['travelStartDate', 'travelEndDate']],
    ];

    public function process(Entity $entity): void
    {
        foreach (self::PAIRS[$entity->getEntityType()] ?? [] as [$first, $second]) {
            $firstValue = $entity->get($first);
            $secondValue = $entity->get($second);

            if ($firstValue && !$secondValue) {
                $entity->set($second, $firstValue);
            } elseif ($secondValue && !$firstValue) {
                $entity->set($first, $secondValue);
            }
        }
    }
}

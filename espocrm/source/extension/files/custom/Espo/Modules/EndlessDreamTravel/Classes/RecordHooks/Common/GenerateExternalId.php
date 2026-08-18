<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Common;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;

class GenerateExternalId implements SaveHook
{
    private const PREFIX_MAP = [
        'EdtHousehold' => 'HH',
        'EdtTrip' => 'TRIP',
        'EdtBooking' => 'BOOK',
        'EdtTripTraveler' => 'TRIPTRAV',
        'EdtBookingTraveler' => 'BOOKTRAV',
        'EdtCommission' => 'COMM',
        'EdtQuote' => 'QUOTE',
        'EdtLoyaltyMembership' => 'LOYALTY',
        'EdtSegmentMembership' => 'SEG',
    ];

    public function process(Entity $entity): void
    {
        if ($entity->get('externalId')) {
            return;
        }

        $prefix = self::PREFIX_MAP[$entity->getEntityType()] ?? 'EDT';
        $entity->set('externalId', $prefix . '-' . strtoupper(bin2hex(random_bytes(5))));
    }
}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(sourceDir, 'extension');
const moduleRoot = path.join(root, 'files/custom/Espo/Modules/EndlessDreamTravel');
const outputDir = path.resolve(sourceDir, '..', 'releases');

fs.rmSync(root, { recursive: true, force: true });
fs.mkdirSync(root, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

const write = (rel, value) => {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n');
};
const moduleWrite = (rel, value) => write(`files/custom/Espo/Modules/EndlessDreamTravel/${rel}`, value);
const field = (type, extra = {}) => ({ type, ...extra });
const link = (type, entity, foreign, extra = {}) => ({ type, entity, foreign, ...extra });
const externalIdField = (maxLength = 60) => field('varchar', { maxLength, index: true, readOnlyAfterCreate: true, relateOnImport: true });

write('manifest.json', {
  name: 'Endless Dream Travel Data Model',
  version: '1.0.27',
  acceptableVersions: ['>=10.0.0 <11.0.0'],
  php: ['>=8.2'],
  releaseDate: '2026-08-16',
  author: 'Endless Dream Travel',
  description: 'Travel CRM entities, fields, relationships, layouts and import keys for households, trips, bookings, commissions, loyalty and marketing segmentation. Version 1.0.27 enables relationship matching by External ID during CSV imports.'
});

const auditFields = {
  createdAt: field('datetime', { readOnly: true, customizationDisabled: true }),
  modifiedAt: field('datetime', { readOnly: true, customizationDisabled: true }),
  createdBy: field('link', { readOnly: true, customizationDisabled: true, view: 'views/fields/user' }),
  modifiedBy: field('link', { readOnly: true, customizationDisabled: true, view: 'views/fields/user' })
};
const auditLinks = {
  createdBy: { type: 'belongsTo', entity: 'User' },
  modifiedBy: { type: 'belongsTo', entity: 'User' }
};

moduleWrite('Classes/RecordHooks/Common/GenerateExternalId.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;

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
`);

moduleWrite('Classes/RecordHooks/Contact/AfterCreateHousehold.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Contact;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

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
`);

moduleWrite('Classes/RecordHooks/Contact/CopyHouseholdAddress.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Contact;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

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
`);

moduleWrite('Classes/RecordHooks/Booking/RecalculateTripTotals.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

class RecalculateTripTotals implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        $tripIdList = [];

        if ($entity->getEntityType() === 'EdtCommission') {
            $bookingIdList = array_values(array_unique(array_filter([
                $entity->get('bookingId'),
                $entity->getFetched('bookingId'),
            ])));

            foreach ($bookingIdList as $bookingId) {
                $booking = $this->entityManager->getEntityById('EdtBooking', (string) $bookingId);
                if ($booking && $booking->get('tripId')) {
                    $tripIdList[] = $booking->get('tripId');
                }
            }
        } else {
            $tripIdList = array_filter([
                $entity->get('tripId'),
                $entity->getFetched('tripId'),
            ]);
        }

        $tripIdList = array_values(array_unique($tripIdList));

        foreach ($tripIdList as $tripId) {
            $this->recalculate((string) $tripId);
        }
    }

    private function recalculate(string $tripId): void
    {
        $trip = $this->entityManager->getEntityById('EdtTrip', $tripId);
        if (!$trip) {
            return;
        }

        $gross = 0.0;
        $balance = 0.0;
        $expectedCommission = 0.0;
        $receivedCommission = 0.0;
        $count = 0;
        $bookingList = $this->entityManager
            ->getRDBRepository('EdtBooking')
            ->where(['tripId' => $tripId])
            ->find();

        foreach ($bookingList as $booking) {
            $bookingReceivedCommission = 0.0;
            $commissionList = $this->entityManager
                ->getRDBRepository('EdtCommission')
                ->where(['bookingId' => $booking->getId()])
                ->find();

            foreach ($commissionList as $commission) {
                if ($commission->get('status') !== 'Received') {
                    continue;
                }

                $bookingReceivedCommission += (float) ($commission->get('receivedAmount') ?? 0);
            }

            $bookingExpectedCommission = (float) ($booking->get('expectedCommission') ?? 0);
            $isPaidFromCommissions = $bookingReceivedCommission > 0 &&
                ($bookingExpectedCommission <= 0 || $bookingReceivedCommission >= $bookingExpectedCommission);
            $bookingIsPaid = (bool) $booking->get('commissionPaidFlag');

            if ($isPaidFromCommissions && !$bookingIsPaid) {
                $booking->set('commissionPaidFlag', true);
                $this->entityManager->saveEntity($booking);
                $bookingIsPaid = true;
            }

            $bookingReceivedForRollup = $bookingReceivedCommission > 0
                ? $bookingReceivedCommission
                : ($bookingIsPaid ? $bookingExpectedCommission : 0.0);

            if (!$booking->get('reportableSale')) {
                continue;
            }

            if (in_array($booking->get('status'), ['Canceled', 'Removed from Live Source'], true)) {
                continue;
            }

            $count++;
            $gross += (float) ($booking->get('grossSale') ?? 0);
            $balance += (float) ($booking->get('balanceDue') ?? 0);
            $expectedCommission += $bookingExpectedCommission;
            $receivedCommission += $bookingReceivedForRollup;
        }

        $trip->set([
            'componentCount' => $count,
            'grossComponentValue' => $gross,
            'balanceDueTotal' => $balance,
            'expectedCommissionTotal' => $expectedCommission,
            'receivedCommissionTotal' => $receivedCommission,
        ]);
        $this->entityManager->saveEntity($trip);
    }
}
`);

moduleWrite('Classes/RecordHooks/Booking/EnsureCommissionRecord.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

class EnsureCommissionRecord implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $booking): void
    {
        if (!$booking->hasId()) {
            return;
        }

        $expectedAmount = (float) ($booking->get('expectedCommission') ?? 0);
        if ($expectedAmount <= 0) {
            return;
        }

        $repository = $this->entityManager->getRDBRepository('EdtCommission');
        $automaticCommission = $repository
            ->where([
                'bookingId' => $booking->getId(),
                'autoGenerated' => true,
            ])
            ->findOne();

        if (!$automaticCommission) {
            $existingBaseCommission = $repository
                ->where([
                    'bookingId' => $booking->getId(),
                    'type' => 'Base Commission',
                ])
                ->findOne();

            if ($existingBaseCommission) {
                return;
            }

            $automaticCommission = $this->entityManager->getNewEntity('EdtCommission');
            $automaticCommission->set([
                'name' => substr('COMM - ' . (string) $booking->get('name'), 0, 180),
                'bookingId' => $booking->getId(),
                'supplierId' => $booking->get('supplierId'),
                'type' => 'Base Commission',
                'status' => 'Expected',
                'autoGenerated' => true,
            ]);
        }

        $automaticCommission->set([
            'name' => substr('COMM - ' . (string) $booking->get('name'), 0, 180),
            'expectedAmount' => $expectedAmount,
            'expectedAmountCurrency' => $booking->get('expectedCommissionCurrency'),
            'supplierId' => $booking->get('supplierId'),
        ]);

        $this->entityManager->saveEntity($automaticCommission);
    }
}
`);

moduleWrite('Classes/RecordHooks/Commission/GenerateCommissionName.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Commission;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

class GenerateCommissionName implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $commission): void
    {
        $bookingId = $commission->get('bookingId');
        if (!$bookingId) {
            return;
        }

        $booking = $this->entityManager->getEntityById('EdtBooking', (string) $bookingId);
        if (!$booking) {
            return;
        }

        $commission->set('name', substr('COMM - ' . (string) $booking->get('name'), 0, 180));
    }
}
`);

moduleWrite('Classes/RecordHooks/Trip/DefaultEndDate.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Trip;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;

class DefaultEndDate implements SaveHook
{
    public function process(Entity $entity): void
    {
        if (!$entity->get('travelEndDate') && $entity->get('travelStartDate')) {
            $entity->set('travelEndDate', $entity->get('travelStartDate'));
        }
    }
}
`);

moduleWrite('Classes/RecordHooks/Common/DefaultDateRanges.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;

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
`);

moduleWrite('Classes/RecordHooks/Common/SyncBookingCommissionSupplier.php', `<?php
namespace Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common;

use Espo\\Core\\Record\\Hook\\SaveHook;
use Espo\\ORM\\Entity;
use Espo\\ORM\\EntityManager;

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
`);

write('files/client/custom/modules/endless-dream-travel/src/views/fields/trip-end-date.js', `define('endless-dream-travel:views/fields/trip-end-date', ['views/fields/date'], function (DateFieldView) {
    return class extends DateFieldView {
        afterRender() {
            super.afterRender();

            if (!this.isEditMode() || !this.$element) {
                return;
            }

            this.$element.on('focus.edt-default-end-date', () => {
                if (this.model.get(this.name)) {
                    return;
                }

                const startDate = this.model.get('travelStartDate');
                if (!startDate) {
                    return;
                }

                this.model.set(this.name, startDate);
                this.$element.val(this.getDateTime().toDisplayDate(startDate));
                this.trigger('change');
            });
        }
    };
});
`);

write('files/client/custom/modules/endless-dream-travel/src/views/fields/commission-booking.js', `define('endless-dream-travel:views/fields/commission-booking', ['views/fields/link'], function (LinkFieldView) {
    return class extends LinkFieldView {
        setup() {
            super.setup();
            this.listenTo(this.model, 'change:bookingId', () => this.populateSupplierFromBooking());
        }

        populateSupplierFromBooking() {
            const bookingId = this.model.get('bookingId');
            if (!bookingId || this.model.get('supplierId')) {
                return;
            }

            Espo.Ajax.getRequest('EdtBooking/' + bookingId)
                .then(booking => {
                    if (this.model.get('bookingId') !== bookingId || this.model.get('supplierId')) {
                        return;
                    }

                    if (booking.supplierId) {
                        this.model.set({
                            supplierId: booking.supplierId,
                            supplierName: booking.supplierName,
                        });
                    }
                });
        }
    };
});
`);

write('files/client/custom/modules/endless-dream-travel/src/views/fields/quote-attachments.js', `define('endless-dream-travel:views/fields/quote-attachments', ['views/fields/attachment-multiple'], function (AttachmentMultipleFieldView) {
    return class extends AttachmentMultipleFieldView {
        afterRender() {
            super.afterRender();

            if (this.mode !== this.MODE_EDIT) {
                return;
            }

            this.$el.off('paste.edtQuoteAttachments').on('paste.edtQuoteAttachments', event => {
                const clipboardItems = event.originalEvent?.clipboardData?.items || [];
                const imageItem = Array.from(clipboardItems).find(item => item.type && item.type.startsWith('image/'));

                if (!imageItem) {
                    return;
                }

                event.preventDefault();
                const extension = imageItem.type.split('/')[1] || 'png';
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const file = imageItem.getAsFile();

                if (!file) {
                    return;
                }

                this.uploadFile(new File([file], 'pasted-screenshot-' + timestamp + '.' + extension, { type: file.type }));
            });
        }
    };
});
`);

const entities = {
  EdtHousehold: {
    label: 'Household', plural: 'Households',
    fields: {
      name: field('varchar', { required: true, maxLength: 150 }),
      externalId: externalIdField(50),
      primaryTraveler: field('link'), sourceNameLabels: field('text'),
      importReviewStatus: field('enum', { options: ['Ready','Needs Review','Do Not Import'], default: 'Ready' }),
      assignedUser: field('link'), teams: field('linkMultiple'), description: field('text')
    },
    links: {
      primaryTraveler: link('belongsTo', 'Contact', 'primaryHouseholds'),
      contacts: link('hasMany', 'Contact', 'household', { audited: true }),
      trips: link('hasMany', 'EdtTrip', 'household', { audited: true }),
      bookings: link('hasMany', 'EdtBooking', 'household'),
      quotes: link('hasMany', 'EdtQuote', 'household'),
      segmentMemberships: link('hasMany', 'EdtSegmentMembership', 'household'),
      assignedUser: link('belongsTo', 'User', 'edtHouseholds'),
      teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' }
    },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true } },
    detail: [['name','externalId'],['primaryTraveler','importReviewStatus'],['sourceNameLabels','assignedUser'],['description','teams']],
    list: ['name','primaryTraveler','importReviewStatus','assignedUser'],
    filters: ['name','externalId','primaryTraveler','importReviewStatus','assignedUser','teams'],
    bottom: ['contacts','trips','bookings','quotes','segmentMemberships']
  },
  EdtTrip: {
    label: 'Trip', plural: 'Trips',
    fields: {
      name: field('varchar', { required: true, maxLength: 180 }), externalId: externalIdField(50),
      household: field('link'), primaryTraveler: field('link'), travelStartDate: field('date'), travelEndDate: field('date', { after: 'travelStartDate', view: 'endless-dream-travel:views/fields/trip-end-date' }), mainBooking: field('link'),
      status: field('enum', { options: ['Proposed','Booked','In Travel','Completed','Canceled'], default: 'Proposed' }),
      componentCount: field('int', { default: 0, readOnly: true }), grossComponentValue: field('currency', { readOnly: true }), expectedCommissionTotal: field('currency', { readOnly: true }), receivedCommissionTotal: field('currency', { readOnly: true }), balanceDueTotal: field('currency', { readOnly: true }),
      importReviewStatus: field('enum', { options: ['Proposed','Confirmed','Needs Review','Do Not Import'], default: 'Proposed' }), groupingNote: field('text'), assignedUser: field('link'), teams: field('linkMultiple'), description: field('text')
    },
    links: {
      household: link('belongsTo', 'EdtHousehold', 'trips'), primaryTraveler: link('belongsTo', 'Contact', 'primaryTrips'), mainBooking: link('belongsTo', 'EdtBooking', 'mainForTrips'),
      bookings: link('hasMany', 'EdtBooking', 'trip', { audited: true }), tripTravelers: link('hasMany', 'EdtTripTraveler', 'trip', { audited: true }),
      quotes: link('hasMany', 'EdtQuote', 'convertedTrip'), assignedUser: link('belongsTo', 'User', 'edtTrips'), teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' }
    },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, travelDates: { columns: ['travelStartDate','travelEndDate'] } },
    detail: [['name','externalId'],['household','primaryTraveler'],['travelStartDate','travelEndDate'],['status','mainBooking'],['grossComponentValue','balanceDueTotal'],['expectedCommissionTotal','receivedCommissionTotal'],['groupingNote','assignedUser'],['description','teams']],
    list: ['name','household','travelStartDate','travelEndDate','status','grossComponentValue','expectedCommissionTotal'],
    filters: ['name','externalId','household','primaryTraveler','travelStartDate','travelEndDate','status','assignedUser','teams'],
    bottom: ['tripTravelers','bookings','quotes']
  },
  EdtBooking: {
    label: 'Booking', plural: 'Bookings',
    fields: {
      name: field('varchar', { required: true, maxLength: 180 }), externalId: externalIdField(50),
      trip: field('link'), household: field('link'), primaryTraveler: field('link'), supplier: field('link'), confirmationNumber: field('varchar', { maxLength: 100, index: true }),
      componentType: field('enum', { options: ['Cruise','Resort / Hotel','Theme Park Tickets','Excursion / Tour','Transfer / Transportation','Travel Insurance','Air','Package','Other'] }),
      componentRole: field('enum', { options: ['Main Booking','Add-on','Standalone Add-on (Review)'], default: 'Main Booking' }), parentComponent: field('link'),
      financialTreatment: field('enum', { options: ['Separate Sale','Included in Parent Price','Non-Reportable','Review'], default: 'Separate Sale' }), includedInParentPrice: field('bool', { default: false }), reportableSale: field('bool', { default: true }),
      travelDateRaw: field('varchar', { maxLength: 255 }), travelStartDate: field('date'), travelEndDate: field('date'), serviceStartDate: field('date'), serviceEndDate: field('date'), finalPaymentDueDate: field('date'), bookingYear: field('int', { disableFormatting: true }),
      status: field('enum', { options: ['Quoted','Booked','Completed','Canceled','Removed from Live Source'], default: 'Booked' }), grossSale: field('currency'), amountPaidToSupplier: field('currency'), balanceDue: field('currency'), expectedCommission: field('currency'),
      commissionPaidFlag: field('bool', { default: false }), bonusAmount: field('currency'), bonusPaidFlag: field('bool', { default: false }), feesFlag: field('bool', { default: false }), thankYouSentFlag: field('bool', { default: false }),
      cliaStateroomFlag: field('bool', { default: false }), cliaStateroomValue: field('varchar', { maxLength: 100 }), onBoardExcursion: field('varchar', { maxLength: 255 }), marketingCategory: field('enum', { options: ['Cruise','Disney','Universal','Resort','Tour / Excursion','Insurance','Transportation','Other'] }),
      importReviewStatus: field('enum', { options: ['Ready','Needs Review','Do Not Import - Removed from Live Source'], default: 'Ready' }), tripAssignmentConfidence: field('enum', { options: ['Confirmed','High','Medium','Low','Needs Review'] }), tripAssignmentNote: field('text'), attachments: field('attachmentMultiple', { view: 'endless-dream-travel:views/fields/quote-attachments' }), notes: field('text'), assignedUser: field('link'), teams: field('linkMultiple')
    },
    links: {
      trip: link('belongsTo', 'EdtTrip', 'bookings'), household: link('belongsTo', 'EdtHousehold', 'bookings'), primaryTraveler: link('belongsTo', 'Contact', 'primaryBookings'), supplier: link('belongsTo', 'Account', 'edtBookings'),
      parentComponent: link('belongsTo', 'EdtBooking', 'childComponents'), childComponents: link('hasMany', 'EdtBooking', 'parentComponent'), mainForTrips: link('hasMany', 'EdtTrip', 'mainBooking'),
      bookingTravelers: link('hasMany', 'EdtBookingTraveler', 'booking', { audited: true }), commissions: link('hasMany', 'EdtCommission', 'booking', { audited: true }),
      assignedUser: link('belongsTo', 'User', 'edtBookings'), teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' }
    },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, confirmationNumber: { columns: ['confirmationNumber'] }, travelDates: { columns: ['travelStartDate','travelEndDate'] } },
    detail: [['name','externalId'],['trip','household'],['primaryTraveler','supplier'],['confirmationNumber','status'],['componentType','componentRole'],['parentComponent','financialTreatment'],['includedInParentPrice','reportableSale'],['travelStartDate','travelEndDate'],['serviceStartDate','serviceEndDate'],['finalPaymentDueDate','bookingYear'],['grossSale','amountPaidToSupplier'],['balanceDue','expectedCommission'],['commissionPaidFlag','bonusAmount'],['bonusPaidFlag','feesFlag'],['thankYouSentFlag','marketingCategory'],['importReviewStatus','tripAssignmentConfidence'],['tripAssignmentNote','assignedUser'],['attachments',false],['notes','teams']],
    list: ['name','trip','supplier','confirmationNumber','componentType','travelStartDate','status','grossSale','expectedCommission'],
    filters: ['name','externalId','trip','household','primaryTraveler','supplier','confirmationNumber','componentType','componentRole','travelStartDate','travelEndDate','status','bookingYear','marketingCategory','importReviewStatus','assignedUser','teams'],
    bottom: ['bookingTravelers','commissions','childComponents','mainForTrips']
  },
  EdtTripTraveler: {
    label: 'Trip Traveler', plural: 'Trip Travelers',
    fields: { name: field('varchar', { maxLength: 180 }), externalId: externalIdField(60), trip: field('link', { required: true }), contact: field('link', { required: true }), travelerRole: field('enum', { options: ['Primary','Traveler','Guest','Group Lead'], default: 'Traveler' }), source: field('varchar', { maxLength: 255 }), manualReviewRequired: field('bool', { default: false }) },
    links: { trip: link('belongsTo', 'EdtTrip', 'tripTravelers'), contact: link('belongsTo', 'Contact', 'edtTripTravelers') },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, tripContactUnique: { columns: ['tripId','contactId'], unique: true } },
    detail: [['trip','contact'],['travelerRole','manualReviewRequired'],['externalId','source']], list: ['trip','contact','travelerRole','manualReviewRequired'], filters: ['trip','contact','travelerRole','manualReviewRequired'], bottom: []
  },
  EdtBookingTraveler: {
    label: 'Booking Traveler', plural: 'Booking Travelers',
    fields: { name: field('varchar', { maxLength: 180 }), externalId: externalIdField(60), booking: field('link', { required: true }), contact: field('link', { required: true }), travelerRole: field('enum', { options: ['Primary','Traveler','Guest','Group Lead'], default: 'Traveler' }), nameParseConfidence: field('enum', { options: ['Corrected','High','Medium','Low'] }), sourceNameLabel: field('varchar', { maxLength: 255 }), manualReviewRequired: field('bool', { default: false }) },
    links: { booking: link('belongsTo', 'EdtBooking', 'bookingTravelers'), contact: link('belongsTo', 'Contact', 'edtBookingTravelers') },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, bookingContactUnique: { columns: ['bookingId','contactId'], unique: true } },
    detail: [['booking','contact'],['travelerRole','nameParseConfidence'],['externalId','manualReviewRequired'],['sourceNameLabel',false]], list: ['booking','contact','travelerRole','manualReviewRequired'], filters: ['booking','contact','travelerRole','nameParseConfidence','manualReviewRequired'], bottom: []
  },
  EdtCommission: {
    label: 'Commission', plural: 'Commissions',
    fields: { name: field('varchar', { maxLength: 180, readOnly: true }), externalId: externalIdField(60), booking: field('link', { required: true, view: 'endless-dream-travel:views/fields/commission-booking' }), supplier: field('link'), type: field('enum', { options: ['Base Commission','Bonus','Adjustment','Clawback'], default: 'Base Commission' }), expectedAmount: field('currency'), receivedAmount: field('currency'), status: field('enum', { options: ['Expected','Received','Disputed','Written Off','Removed / Do Not Import'], default: 'Expected' }), receivedDate: field('date'), autoGenerated: field('bool', { default: false, readOnly: true }), reconciliationNote: field('text'), assignedUser: field('link'), teams: field('linkMultiple') },
    links: { booking: link('belongsTo', 'EdtBooking', 'commissions'), supplier: link('belongsTo', 'Account', 'edtCommissions'), assignedUser: link('belongsTo', 'User', 'edtCommissions'), teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' } },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, receivedDate: { columns: ['receivedDate'] } },
    detail: [['name','externalId'],['booking','supplier'],['type','status'],['expectedAmount','receivedAmount'],['receivedDate','assignedUser'],['reconciliationNote','teams']], list: ['name','booking','supplier','type','expectedAmount','receivedAmount','status','receivedDate'], filters: ['booking','supplier','type','status','receivedDate','assignedUser','teams'], bottom: []
  },
  EdtQuote: {
    label: 'Travel Quote', plural: 'Travel Quotes',
    fields: { name: field('varchar', { required: true, maxLength: 180 }), externalId: externalIdField(60), household: field('link'), primaryContact: field('link'), supplier: field('link'), convertedTrip: field('link'), stage: field('enum', { options: ['Draft','Sent','Accepted','Declined','Expired','Converted'], default: 'Draft' }), estimatedSale: field('currency'), validUntil: field('date'), travelStartDate: field('date'), travelEndDate: field('date'), destination: field('varchar', { maxLength: 255 }), attachments: field('attachmentMultiple', { view: 'endless-dream-travel:views/fields/quote-attachments' }), notes: field('text'), assignedUser: field('link'), teams: field('linkMultiple') },
    links: { household: link('belongsTo', 'EdtHousehold', 'quotes'), primaryContact: link('belongsTo', 'Contact', 'primaryQuotes'), supplier: link('belongsTo', 'Account', 'edtQuotes'), convertedTrip: link('belongsTo', 'EdtTrip', 'quotes'), assignedUser: link('belongsTo', 'User', 'edtQuotes'), teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' } },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true } },
    detail: [['name','externalId'],['household','primaryContact'],['supplier','stage'],['estimatedSale','validUntil'],['travelStartDate','travelEndDate'],['destination','convertedTrip'],['attachments',false],['notes','assignedUser'],['teams',false]], list: ['name','household','primaryContact','supplier','stage','estimatedSale','validUntil'], filters: ['name','externalId','household','primaryContact','supplier','stage','validUntil','travelStartDate','travelEndDate','assignedUser','teams'], bottom: []
  },
  EdtLoyaltyMembership: {
    label: 'Loyalty Membership', plural: 'Loyalty Memberships',
    fields: { name: field('varchar', { required: true, maxLength: 180 }), externalId: externalIdField(60), contact: field('link', { required: true }), supplier: field('link'), programName: field('varchar', { required: true, maxLength: 150 }), membershipNumber: field('varchar', { maxLength: 150, isPersonalData: true }), tier: field('varchar', { maxLength: 100 }), status: field('enum', { options: ['Active','Inactive','Unknown'], default: 'Active' }), verifiedDate: field('date'), notes: field('text'), assignedUser: field('link'), teams: field('linkMultiple') },
    links: { contact: link('belongsTo', 'Contact', 'edtLoyaltyMemberships'), supplier: link('belongsTo', 'Account', 'edtLoyaltyMemberships'), assignedUser: link('belongsTo', 'User', 'edtLoyaltyMemberships'), teams: { type: 'hasMany', entity: 'Team', relationName: 'entityTeam' } },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, contactProgram: { columns: ['contactId','programName'] } },
    detail: [['name','externalId'],['contact','supplier'],['programName','membershipNumber'],['tier','status'],['verifiedDate','assignedUser'],['notes','teams']], list: ['name','contact','supplier','programName','tier','status','verifiedDate'], filters: ['contact','supplier','programName','tier','status','verifiedDate','assignedUser','teams'], bottom: []
  },
  EdtSegmentMembership: {
    label: 'Segment Membership', plural: 'Segment Memberships',
    fields: { name: field('varchar', { maxLength: 180 }), externalId: externalIdField(70), contact: field('link'), household: field('link'), segmentCode: field('varchar', { required: true, maxLength: 100, index: true }), basis: field('text'), active: field('bool', { default: true }), source: field('enum', { options: ['Imported','Calculated','Manual'], default: 'Imported' }), lastEvaluatedDate: field('date') },
    links: { contact: link('belongsTo', 'Contact', 'edtSegmentMemberships'), household: link('belongsTo', 'EdtHousehold', 'segmentMemberships') },
    indexes: { externalIdUnique: { columns: ['externalId'], unique: true }, segmentCode: { columns: ['segmentCode'] } },
    detail: [['segmentCode','active'],['contact','household'],['source','lastEvaluatedDate'],['externalId',false],['basis',false]], list: ['segmentCode','contact','household','active','source','lastEvaluatedDate'], filters: ['segmentCode','contact','household','active','source','lastEvaluatedDate'], bottom: []
  }
};

const standardFields = {
  Contact: {
    fields: {
      edtExternalId: field('varchar', { maxLength: 50, index: true, relateOnImport: true }), household: field('link'), isPrimaryHouseholdContact: field('bool', { default: false }), edtAutoCreateHousehold: field('bool', { default: false }), edtUseHouseholdAddress: field('bool', { default: false }),
      edtAddressLine1: field('varchar', { maxLength: 255, isPersonalData: true }), edtAddressLine2: field('varchar', { maxLength: 255, isPersonalData: true }), edtCity: field('varchar', { maxLength: 100, isPersonalData: true }), edtState: field('varchar', { maxLength: 100, isPersonalData: true }), edtPostalCode: field('varchar', { maxLength: 20, isPersonalData: true }), edtCountry: field('varchar', { maxLength: 100, default: 'United States', isPersonalData: true }), edtDateOfBirth: field('date', { isPersonalData: true }),
      marketingOptIn: field('enum', { options: ['Unknown','Opted In','Opted Out'], default: 'Unknown' }), travelerStatus: field('enum', { options: ['Prospect','Customer','Inactive'], default: 'Prospect' }), nameParseConfidence: field('enum', { options: ['Corrected','High','Medium','Low'] }),
      sourceNameExample: field('varchar', { maxLength: 255 }), manualReviewNote: field('text'), totalBookings: field('int', { default: 0 }), lifetimeSales: field('currency'), lifetimeCommission: field('currency'), lastTravelYear: field('int'), vendorsBooked: field('text'), marketingSegments: field('text')
    },
    links: {
      household: link('belongsTo', 'EdtHousehold', 'contacts'), primaryHouseholds: link('hasMany', 'EdtHousehold', 'primaryTraveler'), primaryTrips: link('hasMany', 'EdtTrip', 'primaryTraveler'), primaryBookings: link('hasMany', 'EdtBooking', 'primaryTraveler'), primaryQuotes: link('hasMany', 'EdtQuote', 'primaryContact'),
      edtTripTravelers: link('hasMany', 'EdtTripTraveler', 'contact'), edtBookingTravelers: link('hasMany', 'EdtBookingTraveler', 'contact'), edtLoyaltyMemberships: link('hasMany', 'EdtLoyaltyMembership', 'contact'), edtSegmentMemberships: link('hasMany', 'EdtSegmentMembership', 'contact')
    },
    indexes: { edtExternalIdUnique: { columns: ['edtExternalId'], unique: true } }
  },
  Account: {
    fields: { edtVendorExternalId: field('varchar', { maxLength: 60, index: true, relateOnImport: true }), edtVendor: field('bool', { default: false }), edtVendorType: field('enum', { options: ['Cruise Line','Theme Park','Resort / Hotel','Tour / Excursion','Insurance','Transportation','Airline','Wholesaler','Other'] }), edtSupplierCode: field('varchar', { maxLength: 50 }), edtVendorStatus: field('enum', { options: ['Active','Inactive'], default: 'Active' }) },
    links: { edtBookings: link('hasMany', 'EdtBooking', 'supplier'), edtCommissions: link('hasMany', 'EdtCommission', 'supplier'), edtQuotes: link('hasMany', 'EdtQuote', 'supplier'), edtLoyaltyMemberships: link('hasMany', 'EdtLoyaltyMembership', 'supplier') },
    indexes: { edtVendorExternalIdUnique: { columns: ['edtVendorExternalId'], unique: true } }
  },
  User: { fields: {}, links: { edtHouseholds: link('hasMany','EdtHousehold','assignedUser'), edtTrips: link('hasMany','EdtTrip','assignedUser'), edtBookings: link('hasMany','EdtBooking','assignedUser'), edtCommissions: link('hasMany','EdtCommission','assignedUser'), edtQuotes: link('hasMany','EdtQuote','assignedUser'), edtLoyaltyMemberships: link('hasMany','EdtLoyaltyMembership','assignedUser') } }
};

const entityIconClasses = {
  EdtHousehold: 'fas fa-home',
  EdtTrip: 'fas fa-ship',
  EdtBooking: 'fas fa-suitcase',
  EdtTripTraveler: 'fas fa-users',
  EdtBookingTraveler: 'fas fa-user-tag',
  EdtCommission: 'fas fa-dollar-sign',
  EdtQuote: 'fas fa-file-invoice-dollar',
  EdtLoyaltyMembership: 'fas fa-award',
  EdtSegmentMembership: 'fas fa-bullseye',
};

for (const [name, def] of Object.entries(entities)) {
  moduleWrite(`Resources/metadata/scopes/${name}.json`, { module: 'EndlessDreamTravel', entity: true, object: true, acl: true, tab: true, importable: true, layouts: true, customizable: true, stream: true, type: 'Base' });
  moduleWrite(`Resources/metadata/clientDefs/${name}.json`, { controller: 'controllers/record', ...(entityIconClasses[name] ? { iconClass: entityIconClasses[name] } : {}) });
  moduleWrite(`Resources/metadata/recordDefs/${name}.json`, { beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\GenerateExternalId'] });
  moduleWrite(`Resources/metadata/entityDefs/${name}.json`, { fields: { ...def.fields, ...auditFields }, links: { ...def.links, ...auditLinks }, indexes: def.indexes, collection: { textFilterFields: ['name','externalId'], orderBy: 'createdAt', order: 'desc' }, transactionalSave: true });
  moduleWrite(`Controllers/${name}.php`, `<?php\nnamespace Espo\\Modules\\EndlessDreamTravel\\Controllers;\n\nuse Espo\\Core\\Controllers\\Record;\n\nclass ${name} extends Record\n{}\n`);
  moduleWrite(`Entities/${name}.php`, `<?php\nnamespace Espo\\Modules\\EndlessDreamTravel\\Entities;\n\nuse Espo\\Core\\ORM\\Entity;\n\nclass ${name} extends Entity\n{\n    public const ENTITY_TYPE = '${name}';\n}\n`);
  const hiddenOperationalFields = new Set(['assignedUser', 'teams']);
  if (name === 'EdtHousehold') {
    hiddenOperationalFields.add('sourceNameLabels');
    hiddenOperationalFields.add('importReviewStatus');
  }
  const detailRows = def.detail
    .map(row => row.map(v => v !== false && hiddenOperationalFields.has(v) ? false : v))
    .filter(row => row.some(v => v !== false));
  const detail = [{ rows: detailRows.map(row => row.map(v => v === false ? false : ({ name: v }))) }];
  const visibleListFields = def.list.filter(v => !hiddenOperationalFields.has(v));
  const list = visibleListFields.map((v, i) => ({
    name: v,
    ...(i === 0 ? { link: true } : {}),
    ...(name === 'EdtTrip' && v === 'name' ? { width: 30 } : {}),
    ...(name === 'EdtBooking' && v === 'name' ? { width: 21 } : {}),
    ...(name === 'EdtBooking' && v === 'trip' ? { width: 18 } : {})
  }));
  moduleWrite(`Resources/layouts/${name}/detail.json`, detail);
  moduleWrite(`Resources/layouts/${name}/detailSmall.json`, detail);
  moduleWrite(`Resources/layouts/${name}/defaultSidePanel.json`, []);
  moduleWrite(`Resources/layouts/${name}/list.json`, list);
  moduleWrite(`Resources/layouts/${name}/listSmall.json`, list.slice(0, 5));
  moduleWrite(`Resources/layouts/${name}/filters.json`, def.filters.filter(v => !hiddenOperationalFields.has(v)));
  moduleWrite(`Resources/layouts/${name}/bottomPanelsDetail.json`, def.bottom.map(name => ({ name })));
}

for (const [name, def] of Object.entries(standardFields)) moduleWrite(`Resources/metadata/entityDefs/${name}.json`, def);
const contactDetailLayout = [{
  label: '',
  rows: [
    [{ name: 'name', fullWidth: true }, false],
    [{ name: 'emailAddress' }, { name: 'phoneNumber' }],
    [{ name: 'household' }, { name: 'edtAutoCreateHousehold' }],
    [{ name: 'edtUseHouseholdAddress' }, false],
    [{ name: 'isPrimaryHouseholdContact' }, { name: 'travelerStatus' }],
    [{ name: 'marketingOptIn' }, { name: 'edtDateOfBirth' }],
    [{ name: 'edtAddressLine1', fullWidth: true }, false],
    [{ name: 'edtAddressLine2', fullWidth: true }, false],
    [{ name: 'edtCity' }, { name: 'edtState' }],
    [{ name: 'edtPostalCode' }, { name: 'edtCountry' }],
    [{ name: 'edtExternalId' }, false],
    [{ name: 'description', fullWidth: true }]
  ]
}];
const contactDetailSmallLayout = [{
  label: '',
  rows: [
    [{ name: 'name', fullWidth: true }, false],
    [{ name: 'emailAddress', fullWidth: true }, false],
    [{ name: 'phoneNumber', fullWidth: true }, false],
    [{ name: 'household', fullWidth: true }, false],
    [{ name: 'edtAutoCreateHousehold' }, { name: 'edtUseHouseholdAddress' }],
    [{ name: 'isPrimaryHouseholdContact' }, { name: 'travelerStatus' }],
    [{ name: 'marketingOptIn' }, { name: 'edtDateOfBirth' }],
    [{ name: 'edtAddressLine1', fullWidth: true }, false],
    [{ name: 'edtAddressLine2', fullWidth: true }, false],
    [{ name: 'edtCity', fullWidth: true }, false],
    [{ name: 'edtState' }, { name: 'edtPostalCode' }],
    [{ name: 'edtCountry', fullWidth: true }, false],
    [{ name: 'edtExternalId', fullWidth: true }, false],
    [{ name: 'description', fullWidth: true }, false]
  ]
}];
moduleWrite('Resources/layouts/Contact/detail.json', contactDetailLayout);
moduleWrite('Resources/layouts/Contact/detailSmall.json', contactDetailSmallLayout);
moduleWrite('Resources/layouts/Contact/defaultSidePanel.json', []);
const contactListLayout = [
  { name: 'name', link: true },
  { name: 'emailAddress' },
  { name: 'phoneNumber' },
  { name: 'household' },
  { name: 'travelerStatus' }
];
moduleWrite('Resources/layouts/Contact/list.json', contactListLayout);
moduleWrite('Resources/layouts/Contact/listSmall.json', contactListLayout.slice(0, 4));
write('files/custom/Espo/Custom/Resources/layouts/Contact/detail.json', contactDetailLayout);
write('files/custom/Espo/Custom/Resources/layouts/Contact/detailSmall.json', contactDetailSmallLayout);
write('files/custom/Espo/Custom/Resources/layouts/Contact/defaultSidePanel.json', []);
write('files/custom/Espo/Custom/Resources/layouts/Contact/list.json', contactListLayout);
write('files/custom/Espo/Custom/Resources/layouts/Contact/listSmall.json', contactListLayout.slice(0, 4));
write('files/custom/Espo/Custom/Resources/layouts/Account/defaultSidePanel.json', []);
moduleWrite('Resources/metadata/recordDefs/Contact.json', {
  beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Contact\\CopyHouseholdAddress'],
  beforeUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Contact\\CopyHouseholdAddress'],
  afterCreateHookClassNameList: ['Espo\\Modules\\Crm\\Classes\\RecordHooks\\Contact\\AfterCreate', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Contact\\AfterCreateHousehold']
});
moduleWrite('Resources/metadata/recordDefs/EdtBooking.json', {
  beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\GenerateExternalId', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\SyncBookingCommissionSupplier', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges'],
  beforeUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\SyncBookingCommissionSupplier', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges'],
  afterCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\EnsureCommissionRecord', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals'],
  afterUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\EnsureCommissionRecord', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals'],
  afterDeleteHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals']
});
moduleWrite('Resources/metadata/recordDefs/EdtCommission.json', {
  beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\GenerateExternalId', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Commission\\GenerateCommissionName', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\SyncBookingCommissionSupplier'],
  beforeUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Commission\\GenerateCommissionName', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\SyncBookingCommissionSupplier'],
  afterCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals'],
  afterUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals'],
  afterDeleteHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Booking\\RecalculateTripTotals']
});
moduleWrite('Resources/metadata/recordDefs/EdtTrip.json', {
  beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\GenerateExternalId', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges'],
  beforeUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges']
});
moduleWrite('Resources/metadata/recordDefs/EdtQuote.json', {
  beforeCreateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\GenerateExternalId', 'Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges'],
  beforeUpdateHookClassNameList: ['Espo\\Modules\\EndlessDreamTravel\\Classes\\RecordHooks\\Common\\DefaultDateRanges']
});

moduleWrite('Resources/metadata/app/client.json', {
  cssList: ['__APPEND__', 'client/custom/modules/endless-dream-travel/css/branding-v1.0.18.css']
});
write('files/client/custom/modules/endless-dream-travel/css/branding-v1.0.18.css', `.edt-ship-icon {
    display: inline-block !important;
    width: 1.15em;
    height: 1.15em;
    background: url('../img/logo-ship.png') center / contain no-repeat;
    vertical-align: -0.15em;
}

.edt-ship-icon::before {
    content: '' !important;
}

/* Use the matching lettering treatment for the active EspoCRM theme. */
img[alt="logo"] { content: url('../img/logo-light.png'); }
body[data-is-dark="true"] img[alt="logo"] { content: url('../img/logo-dark.png'); }

/* Endless Dream Travel navigation accents. */
.navbar a[href="#EdtTrip"] .short-label span { color: #55b6d9 !important; }
.navbar a[href="#EdtBooking"] .short-label span { color: #6fc7e8 !important; }
.navbar a[href="#EdtHousehold"] .short-label span { color: #f2b45f !important; }
.navbar a[href="#Contact"] .short-label span { color: #82c98f !important; }
.navbar a[href="#EdtCommission"] .short-label span { color: #9bd36a !important; }
.navbar a[href="#EdtQuote"] .short-label span { color: #c7a5f5 !important; }
.navbar a[href="#EdtLoyaltyMembership"] .short-label span { color: #f3c84b !important; }
.navbar a[href="#Account"] .short-label span { color: #e59b78 !important; }
`);
const shipLogoTarget = path.join(root, 'files/client/custom/modules/endless-dream-travel/img/logo-ship.png');
fs.mkdirSync(path.dirname(shipLogoTarget), { recursive: true });
fs.copyFileSync(path.resolve('work/brand-logo-ship.png'), shipLogoTarget);
fs.copyFileSync(path.resolve('work/brand-logo-black-text.png'), path.join(path.dirname(shipLogoTarget), 'logo-light.png'));
fs.copyFileSync(path.resolve('work/brand-logo-crm-horizontal.png'), path.join(path.dirname(shipLogoTarget), 'logo-dark.png'));

const pretty = s => s.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
const global = { scopeNames: {}, scopeNamesPlural: {} };
for (const [name, def] of Object.entries(entities)) { global.scopeNames[name] = def.label; global.scopeNamesPlural[name] = def.plural; }
global.scopeNames.Account = 'Vendor';
global.scopeNamesPlural.Account = 'Vendors';
global.scopeNames.Contact = 'Client';
global.scopeNamesPlural.Contact = 'Clients';
moduleWrite('Resources/i18n/en_US/Global.json', global);

for (const [name, def] of Object.entries(entities)) {
  const fields = {}, links = {}, options = {};
  for (const [k, v] of Object.entries(def.fields)) { fields[k] = k === 'externalId' ? `${def.label} External ID` : pretty(k); if (v.options) options[k] = Object.fromEntries(v.options.map(x => [x,x])); }
  if (name === 'EdtTrip') fields.grossComponentValue = 'Gross Trip Cost';
  for (const k of Object.keys(def.links)) links[k] = pretty(k);
  if ('contact' in fields) fields.contact = 'Client';
  if ('primaryContact' in fields) fields.primaryContact = 'Primary Client';
  if ('contact' in links) links.contact = 'Client';
  if ('contacts' in links) links.contacts = 'Clients';
  if ('primaryContact' in links) links.primaryContact = 'Primary Client';
  moduleWrite(`Resources/i18n/en_US/${name}.json`, { labels: { [`Create ${name}`]: `Create ${def.label}` }, fields, links, options });
}

moduleWrite('Resources/i18n/en_US/Contact.json', { fields: { accounts: 'Vendors', account: 'Primary Vendor', title: 'Vendor Contact Title', edtExternalId: 'Traveler External ID', household: 'Household', isPrimaryHouseholdContact: 'Primary Household Contact', edtAutoCreateHousehold: 'Create Household Automatically', edtAddressLine1: 'Address 1', edtAddressLine2: 'Address 2', edtCity: 'City', edtState: 'State', edtPostalCode: 'ZIP Code', edtCountry: 'Country', edtDateOfBirth: 'Date of Birth', marketingOptIn: 'Marketing Opt-In', travelerStatus: 'Traveler Status', nameParseConfidence: 'Name Parse Confidence', sourceNameExample: 'Source Name Example', manualReviewNote: 'Manual Review Note', totalBookings: 'Total Bookings', lifetimeSales: 'Lifetime Sales', lifetimeCommission: 'Lifetime Commission', lastTravelYear: 'Last Travel Year', vendorsBooked: 'Vendors Booked', marketingSegments: 'Marketing Segments' }, links: { accounts: 'Vendors', account: 'Primary Vendor', household: 'Household', primaryHouseholds: 'Primary Households', primaryTrips: 'Primary Trips', primaryBookings: 'Primary Bookings', primaryQuotes: 'Primary Quotes', edtTripTravelers: 'Trip Travelers', edtBookingTravelers: 'Booking Travelers', edtLoyaltyMemberships: 'Loyalty Memberships', edtSegmentMemberships: 'Segment Memberships' }, options: { marketingOptIn: { Unknown:'Unknown','Opted In':'Opted In','Opted Out':'Opted Out' }, travelerStatus: { Prospect:'Prospect',Customer:'Customer',Inactive:'Inactive' }, nameParseConfidence: { Corrected:'Corrected',High:'High',Medium:'Medium',Low:'Low' } } });
const contactI18nPath = path.join(moduleRoot, 'Resources/i18n/en_US/Contact.json');
const contactI18n = JSON.parse(fs.readFileSync(contactI18nPath, 'utf8'));
contactI18n.fields.edtUseHouseholdAddress = 'Use Existing Household Address';
moduleWrite('Resources/i18n/en_US/Contact.json', contactI18n);
moduleWrite('Resources/i18n/en_US/Account.json', { fields: { edtVendorExternalId:'Vendor External ID', edtVendor:'Is Travel Vendor', edtVendorType:'Vendor Type', edtSupplierCode:'Supplier Code', edtVendorStatus:'Vendor Status' }, links: { contacts:'Clients', edtBookings:'Bookings', edtCommissions:'Commissions', edtQuotes:'Travel Quotes', edtLoyaltyMemberships:'Loyalty Memberships' } });

write('README.txt', `Endless Dream Travel Data Model 1.0.5\n\nTarget: EspoCRM 10.x\n\nCreates nine travel entities and extends Contact and Account. No client data is included.\nVersion 1.0.5 improves traveler, address, quote and automatic trip-total workflows while preserving import identity fields.\nInstall from Administration > Extensions, then confirm the automatic rebuild completed.\nReview roles before importing data.\n\nImport identity fields:\nContact.edtExternalId <- ContactExternalId\nEdtHousehold.externalId <- HouseholdExternalId\nEdtTrip.externalId <- TripExternalId\nEdtBooking.externalId <- BookingExternalId\nEdtTripTraveler.externalId <- TripTravelerExternalId\nEdtBookingTraveler.externalId <- BookingTravelerExternalId\nEdtCommission.externalId <- CommissionExternalId\nEdtQuote.externalId <- QuoteExternalId\nEdtLoyaltyMembership.externalId <- LoyaltyExternalId\nEdtSegmentMembership.externalId <- SegmentMembershipExternalId\n`);

console.log(JSON.stringify({ root, outputDir, entities: Object.keys(entities), files: fs.readdirSync(root, { recursive: true }).length }, null, 2));

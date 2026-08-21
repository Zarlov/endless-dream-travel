<?php
namespace Espo\Modules\EndlessDreamTravel\Api;

use Espo\Core\Acl;
use Espo\Core\Api\Action;
use Espo\Core\Api\Request;
use Espo\Core\Api\Response;
use Espo\Core\Api\ResponseComposer;
use Espo\Core\Exceptions\BadRequest;
use Espo\Core\Exceptions\Forbidden;
use Espo\Core\Record\EntityProvider;
use Espo\Modules\EndlessDreamTravel\Entities\EdtBooking;
use Espo\Modules\EndlessDreamTravel\Tools\PaymentReminder\ReminderService;

class PostEdtBookingPaymentReminder implements Action
{
    public function __construct(private EntityProvider $entityProvider, private Acl $acl, private ReminderService $service)
    {}

    public function process(Request $request): Response
    {
        $id = $request->getRouteParam('id') ?? throw new BadRequest('Booking ID is required.');
        $booking = $this->entityProvider->getByClass(EdtBooking::class, $id);
        if (!$this->acl->checkEntityEdit($booking)) {
            throw new Forbidden('No edit access.');
        }
        return ResponseComposer::json($this->service->sendNow($booking, true));
    }
}

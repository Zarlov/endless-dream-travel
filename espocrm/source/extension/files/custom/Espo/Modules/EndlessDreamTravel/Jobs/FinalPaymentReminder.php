<?php
namespace Espo\Modules\EndlessDreamTravel\Jobs;

use Espo\Core\Job\JobDataLess;
use Espo\Modules\EndlessDreamTravel\Tools\PaymentReminder\ReminderService;

class FinalPaymentReminder implements JobDataLess
{
    public function __construct(private ReminderService $service)
    {}

    public function run(): void
    {
        $this->service->runDaily(true);
    }
}

<?php
namespace Espo\Modules\EndlessDreamTravel\Classes\RecordHooks\Booking;

use Espo\Core\Record\Hook\SaveHook;
use Espo\ORM\Entity;
use Espo\ORM\EntityManager;

class DefaultPaymentReminderSettings implements SaveHook
{
    public function __construct(private EntityManager $entityManager)
    {}

    public function process(Entity $entity): void
    {
        if (!$entity->get('reminderDays')) {
            $entity->set('reminderDays', ['30', '14', '7', '3', '1']);
        }

        if ($entity->get('paymentReminderRecipientId')) {
            return;
        }

        if ($entity->get('assignedUserId')) {
            $entity->set('paymentReminderRecipientId', $entity->get('assignedUserId'));
            return;
        }

        $user = $this->entityManager->getRDBRepository('User')
            ->where(['userName' => 'ddriver', 'isActive' => true])
            ->findOne();

        if ($user) {
            $entity->set('paymentReminderRecipientId', $user->getId());
        }
    }
}

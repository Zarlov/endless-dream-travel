define(['action-handler'], function (ActionHandler) {
    return class extends ActionHandler {
        async sendPaymentReminder() {
            await this.view.confirm({
                message: 'Send a final-payment reminder to the configured client recipients now?',
                confirmText: 'Send Reminder',
                confirmStyle: 'warning'
            });
            Espo.Ui.notify('Sending reminder...');
            try {
                const result = await Espo.Ajax.postRequest('EdtBooking/' + this.view.model.id + '/payment-reminder', {});
                Espo.Ui.notify();
                if (result.sent) {
                    Espo.Ui.success('Payment reminder sent to ' + result.recipientCount + ' recipient(s).');
                    await this.view.model.fetch();
                    return;
                }
                Espo.Ui.warning(result.reason || 'The reminder was not sent.');
            } catch (e) {
                Espo.Ui.notify();
                throw e;
            }
        }

        isAvailable() {
            return !!this.view.model.get('finalPaymentDueDate') && Number(this.view.model.get('balanceDue') || 0) > 0;
        }
    };
});

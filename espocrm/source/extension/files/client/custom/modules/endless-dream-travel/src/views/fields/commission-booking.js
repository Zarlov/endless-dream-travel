define('endless-dream-travel:views/fields/commission-booking', ['views/fields/link'], function (LinkFieldView) {
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

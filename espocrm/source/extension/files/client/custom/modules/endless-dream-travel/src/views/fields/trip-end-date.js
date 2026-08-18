define('endless-dream-travel:views/fields/trip-end-date', ['views/fields/date'], function (DateFieldView) {
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

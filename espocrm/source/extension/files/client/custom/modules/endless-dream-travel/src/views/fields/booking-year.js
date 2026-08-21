define('endless-dream-travel:views/fields/booking-year', ['views/fields/int'], function (IntFieldView) {
    return class extends IntFieldView {
        setup() {
            super.setup();

            if (!this.model.id && !this.model.get(this.name)) {
                this.model.set(this.name, new Date().getFullYear());
            }
        }
    };
});

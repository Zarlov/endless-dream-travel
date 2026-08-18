define('endless-dream-travel:views/fields/quote-attachments', ['views/fields/attachment-multiple'], function (AttachmentMultipleFieldView) {
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

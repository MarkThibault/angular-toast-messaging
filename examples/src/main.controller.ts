import * as angularToastMessaging from "../../src/index.d";
let singleToastClose;
export default class MainController {

    static $inject = ["angularToastMessagingService"];
    constructor(
        private angularToastMessagingService: angularToastMessaging.ToastMessagingService
    ) {}

    clearAllMessages() {
        this.angularToastMessagingService.clearAllMessages();
    }

    clearSingleToast() {
        this.angularToastMessagingService.clearMessage(singleToastClose);
    }

    showSingleToast() {
        singleToastClose = this.angularToastMessagingService.showError({
            body: "Single Toast Close"
        });
    }

    showSuccessToast() {
        this.angularToastMessagingService.showSuccess({
            body: "Great success!"
        });
    }

    showInfoToast() {
        this.angularToastMessagingService.showInfo({
            body: "Just so you know!",
            settings: {
                progressBar: true
            }
        });
    }

    showErrorToast() {
        this.angularToastMessagingService.showError({
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        });
    }

    showWarningToast() {
        this.angularToastMessagingService.showWarning({
            body: "What are you doing!?"
        });
    }
}
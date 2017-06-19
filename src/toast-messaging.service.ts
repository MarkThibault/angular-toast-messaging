import * as angularToastr from "angular-toastr";
import *as angularToastMessaging from "./index.d";

export default class ToastMessagingService {
    static $inject = ["toastr"];
    constructor(
        private toastr: ng.toastr.IToastrService
    ) {}

    clearAllMessages() {
        this.toastr.clear();
    }

    clearMessage(toast?: ng.toastr.IToast) {
        this.toastr.clear(toast);
    }

    getActiveMessages() {
        return this.toastr.active();
    }

    showInfo(toastSettings: angularToastMessaging.ToastSettings): angular.toastr.IToast {
        return this.toastr.info(toastSettings.body, toastSettings.header, toastSettings.settings);
    }

    showSuccess(toastSettings: angularToastMessaging.ToastSettings): angular.toastr.IToast {
        return this.toastr.success(toastSettings.body, toastSettings.header, toastSettings.settings);
    }

    showError(toastSettings: angularToastMessaging.ToastSettings): angular.toastr.IToast {
        // Defaults to requiring close button click to dismiss
        if (toastSettings.settings) {
            toastSettings.settings.timeOut = toastSettings.settings.timeOut ? toastSettings.settings.timeOut : 0;
            toastSettings.settings.extendedTimeOut = toastSettings.settings.extendedTimeOut ? toastSettings.settings.extendedTimeOut : 0;
        }
        else {
            toastSettings.settings = {
                timeOut: 0,
                extendedTimeOut: 0
            };
        }
        return this.toastr.error(toastSettings.body, toastSettings.header, toastSettings.settings);
    }

    showWarning(toastSettings: angularToastMessaging.ToastSettings): angular.toastr.IToast {
        return this.toastr.warning(toastSettings.body, toastSettings.header, toastSettings.settings);
    }
};


// Type definitions for Angular Toast Messaging
export as namespace angularToastMessaging;
export = angularToastMessaging;

declare namespace angularToastMessaging {
    interface ToastSettings {
        header?: string;
        body: string;
        settings?: angular.toastr.IToastOptions;
    }
    interface ToastMessagingService {
        clearAllMessages();
        clearMessage(toast?: angular.toastr.IToast);
        getActiveMessages();
        showInfo(toastSettings: ToastSettings): angular.toastr.IToast;
        showSuccess(toastSettings: ToastSettings): angular.toastr.IToast;
        showError(toastSettings: ToastSettings): angular.toastr.IToast;
        showWarning(toastSettings: ToastSettings): angular.toastr.IToast;
    }
}
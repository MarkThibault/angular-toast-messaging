import * as angular from "angular";
import "angular-toastr";

import ToastMessagingService from "./toast-messaging.service";
import ToastIconComponent from "./toast-icon.component";
const toastMessagingTemplate = require("./toast-messaging.template.html");
const progressbarTemplate = require("./progressbar.template.html");

angular
    .module("angularToastMessagingModule", [
        "ngAnimate",
        "toastr"
    ])
    .config(["toastrConfig", function(toastrConfig: ng.toastr.IToastBaseConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: "toast-container",
            maxOpened: 6,
            newestOnTop: true,
            positionClass: "ToastWrapper--topRight",
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: "body"
        });
    }])
    .config(["toastrConfig", function(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: true,
            closeButton: true,
            closeHtml: "<button class='Toast-close'>&times;</button>",
            extendedTimeOut: 60000,
            iconClasses: {
                error: "is-error",
                info: "is-information",
                success: "is-confirmation",
                warning: "is-warning"
            },
            messageClass: "Toast-message",
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: true,
            tapToDismiss: false,
            templates: {
                toast: toastMessagingTemplate,
                progressbar: progressbarTemplate
            },
            timeOut: 7000,
            titleClass: "Toast-title",
            toastClass: "Toast"
        });
    }])
    .service("angularToastMessagingService", ToastMessagingService)
    .component("toastIcon", new ToastIconComponent());

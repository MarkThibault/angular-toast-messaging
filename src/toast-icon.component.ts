export default class ToastIconComponent implements ng.IComponentOptions {
    bindings: any = {
        type: "@"
    };
    controller = ToastIconController;
    templateUrl = require("./toast-icon.component.html");
}

class ToastIconController {
    iconToDisplay: string;
    type: string;

    private confirmationIcon = this.$sce.trustAsHtml(require("./icons/confirmation-circle-icon.svg"));
    private errorIcon = this.$sce.trustAsHtml(require("./icons/error-circle-icon.svg"));
    private informationIcon = this.$sce.trustAsHtml(require("./icons/info-circle-icon.svg"));
    private warningIcon = this.$sce.trustAsHtml(require("./icons/warning-triangle-icon.svg"));

    static $inject = ["$sce"];
    constructor(
        private $sce: ng.ISCEService,
    ) {
        this.setIcon();
    }

    private setIcon() {
        switch (this.type) {
            case "is-confirmation":
                this.iconToDisplay = this.confirmationIcon;
                break;
            case "is-error":
                this.iconToDisplay = this.errorIcon;
                break;
            case "is-information":
                this.iconToDisplay = this.informationIcon;
                break;
            case "is-warning":
                this.iconToDisplay = this.warningIcon;
                break;
            default:
                this.iconToDisplay = "Bad type name used";
        }
    }
}
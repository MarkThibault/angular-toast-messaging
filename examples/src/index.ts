import "./app.scss";
import "./favicon.png";

import * as angular from "angular";
import "../../dist/angular-toast-messaging";
import MainController from "./main.controller";

angular
    .module("app", ["angularToastMessagingModule"])
    .controller("MainController", MainController);
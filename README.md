# Angular Toast Messaging

Angular Toast Messaging is an Angular based service, controller and component that wraps ngDialog.

## Getting Started

### Prerequisites

It is suggested to have "angular-animate" installed.

### Installing

Add the following to your dependencies:
```
"angular-toast-messaging": "git://github.com/MarkThibault/angular-toast-messaging.git",
```

Sass:
```
@import '../node_modules/angular-toast-messaging/src/index';
```

Remember to add "angular-toastr" which should be in the node_modules folder.

### Usage

Inject into angular module:
```
angular
    .module("app", ["angularToastMessagingModule"])
```

Inject into controller or service:
```
static $inject = ["angularToastMessagingService"];
constructor(
    private angularToastMessagingService: angularToastMessaging.ToastMessagingService
) {}
```

Open success toast message:
```
this.angularToastMessagingService.showSuccess({
    body: "Great success!",
    settings: {
        progressBar: true
    }
});
```

Open info toast message:
```
this.angularToastMessagingService.showInfo({
    body: "Just so you know!"
});
```

Open error toast message:
```
this.angularToastMessagingService.showError({
    body: "Danger! Danger!",
    settings: {
        closeButton: true,
        extendedTimeOut: 0,
        timeOut: 0,
    }
});
```

Open warning toast message:
```
this.angularToastMessagingService.showWarning({
    body: "What are you doing!?",
    settings: {
        closeButton: true
    }
});
```

## Running the tests


## Deployment



## Built With


## Contributing

## Versioning

## Authors

## License

## Acknowledgments

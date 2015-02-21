var modules = (function () {
    var constantModule = "application.constant";
    var directiveModule = "application.directive";
    var serviceModule = "application.service";
    var controllerModule = "application.controller";
    var applicationModule = "application";
    var constantModuleObject;
    var directiveModuleObject;
    var serviceModuleObject;
    var controllerModuleObject;
    var applicationModuleObject;
    createModules();

    function createModules() {
        if (!constantModuleObject) {
            constantModuleObject = angular.module(constantModule, []);
        }
        if (!serviceModuleObject) {
            serviceModuleObject = angular.module(serviceModule, [constantModule]);
        }
        if (!directiveModuleObject) {
            directiveModuleObject = angular.module(directiveModule, [serviceModule, constantModule]);
        }
        if (!controllerModuleObject) {
            controllerModuleObject = angular.module(controllerModule, [serviceModule, directiveModule, constantModule]);
        }
        if (!applicationModuleObject) {
            applicationModuleObject = angular.module(applicationModule, [serviceModule, controllerModule, constantModule]);
        }
    }


    return {
        constantModule: constantModuleObject,
        directiveModule: directiveModuleObject,
        serviceModule: serviceModuleObject,
        controllerModule: controllerModuleObject,
        applicationModule: applicationModuleObject
    };

})();
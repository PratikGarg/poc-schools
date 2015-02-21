modules.directiveModule.directive('facilityAdmission', function ($pluginService) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            admissionFlow:"=info"
        },
        controller: function ($scope) {
         
        },
        templateUrl: "/scripts/app/directives/admission/admission-template.html"
    };
})
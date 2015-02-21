modules.directiveModule.directive('facilityEvent', function ($pluginService) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            eventList:"=info"
        },
        controller: function ($scope) {
         
        },
        templateUrl: "/scripts/app/directives/event/event-template.html"
    };
})
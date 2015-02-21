modules.directiveModule.directive('iconDetail', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            iconList:"=info"
        },
        controller: function ($scope) {
           
        },
        templateUrl: "/scripts/app/directives/icon/icon-template.html"
    };
})
modules.directiveModule.directive('elasticGrid', function ($pluginService) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            imageList:"=info"
        },
        controller: function ($scope) {
            $pluginService.elasticGrid($scope.imageList);
        },
        templateUrl: "/scripts/app/directives/elasticgrid/grid-template.html"
    };
})
modules.directiveModule.directive('carousel', function ($timeout,$pluginService) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            carousel:"=info"
        },
        controller: function ($scope) {
        },
        templateUrl: "/scripts/app/directives/carousel/carousel-template.html"
    };
})
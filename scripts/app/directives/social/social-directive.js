modules.directiveModule.directive('socialList', function ($pluginService, $timeout) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            socialList:"=info"
        },
        link: function (scope, element) {
            $timeout(function () {
                $pluginService.social("#" + scope.socialList.id, scope.socialList);
            }, 500);
        },
        controller: function ($scope) {
           
        },
        templateUrl: "/scripts/app/directives/social/social-template.html"
    };
})
modules.directiveModule.directive('facilitySearch', function ($pluginService, appUrl, $compile) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {

        },
        controller: function ($scope) {
            $scope.model = {
                location: "assd",
                keyword: "",
                search: function () {
                   
                }
            };
        },
        templateUrl: "/Scripts/app/Directives/Search/search-template.html",
        link: function (scope, element, attrs) {
            $pluginService.typeahead({
                id: "#search-location",
                url: appUrl.filterLocation
            });
        }
    };
})
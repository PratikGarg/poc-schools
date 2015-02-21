modules.serviceModule.service('$restService', function ($http) {
    this.get = function(options) {
        $http.get(options.url).success(options.successCallback).error(options.failCallback);
    }
});
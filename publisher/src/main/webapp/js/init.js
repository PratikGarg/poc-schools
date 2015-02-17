(function() {

	var httpHeaders, message, as = angular.module('exampleApp', [ 'ngRoute',
			'ngResource', 'ngCookies', 'exampleApp.i18n',
			'exampleApp.services', 'exampleApp.controllers',
			'exampleApp.filters' ]);

	as.config(function($routeProvider, $httpProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'partials/login.html',
			publicAccess : true
		}).when('/home', {
			templateUrl : 'index.html',
			publicAccess : true
		}).when('/login', {
			templateUrl : 'partials/login.html',
			publicAccess : true
		}).when('/posts', {
			controller : 'PostsController',
			templateUrl : 'partials/posts/home.html'
		}).when('/posts/new', {
			controller : 'NewPostController',
			templateUrl : 'partials/posts/new.html'
		}).when('/listing', {
			controller : 'ListingController',
			templateUrl : 'partials/listing/home.html'
		}).when('/listing/new', {
			controller : 'NewListingController',
			templateUrl : 'partials/listing/new.html',
			publicAccess : true
		}).when('/posts/:id', {
			controller : 'DetailsController',
			templateUrl : 'partials/posts/details.html'
		}).when('/admin/users', {
			templateUrl : 'partials/admin/users.html'
		}).when('/user/home', {
			templateUrl : 'partials/user/home.html'
		}).when('/user/profile', {
			templateUrl : 'partials/user/profile.html'
		}).when('/user/password', {
			templateUrl : 'partials/user/password.html'
		});
		

		$httpProvider.interceptors.push(function($q) {
			var setMessage = function(response) {
				if (response.data.text && response.data.type) {
					message = {
						text : response.data.text,
						type : response.data.type,
						show : true
					};
				}
			};

			return {
				'response' : function(response) {
					setMessage(response);
					return response || $q.when(response);
				},
				'responseError' : function(response) {
					setMessage(response);
					return $q.reject(response);
				}

			};
		});

		$httpProvider.interceptors.push(function($rootScope, $q , $cookieStore) {
			return {
				'request' : function(config) {
					return config || $q.when(config);
				},
				'requestError' : function(rejection) {
					return rejection;
				},
				'response' : function(response) {
					return response || $q.when(response);
				},
				'responseError' : function(response) {
					console.log('responseError:' + response);
					if (response.status === 401) {
						var deferred = $q.defer(), req = {
							config : response.config,
							deferred : deferred
						};
						$rootScope.requests401.push(req);
						$rootScope.$broadcast('event:loginRequired');
						return deferred.promise;
					}
					return $q.reject(response);
				}

			};
		});

		httpHeaders = $httpProvider.defaults.headers;
	});

	as
			.run(function($rootScope, $http, $route, $location, base64,
					$cookieStore) {
				$rootScope.message = function() {
					return message;
				};
				$rootScope.requests401 = [];
				$rootScope.$on('event:loginRequired', function() {
					$location.path('/login');
				});

				$rootScope.$on('event:loginConfirmed', function() {
					var i, requests = $rootScope.requests401, retry = function(
							req) {
						$http(req.config).then(function(response) {
							req.deferred.resolve(response);
						});
					};

					for (i = 0; i < requests.length; i += 1) {
						retry(requests[i]);
					}
					$rootScope.requests401 = [];
					$location.path('/posts');
				});

				$rootScope.$on('event:loginRequest', function(event, username,
						password) {
					
					httpHeaders.common['Authorization'] = 'Basic '
							+ base64.encode(username + ':' + password);
					
					$http.get('api/user').success(
							function(data) {
								$rootScope.user = data;
								$cookieStore.put('app-user', data);
								$cookieStore.put('app-user-credentials',
										'Basic '
												+ base64.encode(username + ':'
														+ password));
								$rootScope.$broadcast('event:loginConfirmed');
							}).error(function(data) {
						console.log('login failed...');
					});
				});

				$rootScope.$on('event:logoutRequest', function() {
					httpHeaders.common['Authorization'] = null;
					delete $rootScope.user;
					$cookieStore.remove('app-user');
					$location.url("/login");
				});

				var routesOpenToPublic = [];
				angular.forEach($route.routes, function(route, path) {
					route.publicAccess && (routesOpenToPublic.push(path));
				});

				$rootScope.$on('$routeChangeStart', function(event, nextLoc,
						currentLoc) {
					$rootScope.user = $cookieStore.get('app-user');
					var closedToPublic = (-1 === routesOpenToPublic
							.indexOf($location.path()));
					if (closedToPublic && !$rootScope.user) {
						$rootScope.$broadcast('event:loginRequired');
					} else if (!!$rootScope.user) {
						if (nextLoc.templateUrl == 'partials/login.html') {
							console.log('in login.html, go to /user/home...');
							$location.path('/user/home');
						} else {
						}
					}
				});

			});
}());
(function() {
    var as = angular.module('exampleApp.controllers', []);

    as.controller('MainController', function($q, $scope, $rootScope, $http, i18n, $location) {
        var load = function() {
        };

        load();

        $scope.language = function() {
            return i18n.language;
        };
        $scope.setLanguage = function(lang) {
            i18n.setLanguage(lang);
        };
        $scope.activeWhen = function(value) {
            return value ? 'active' : '';
        };

        $scope.path = function() {
            return $location.url();
        };

        $scope.logout = function() {
            $rootScope.user = null;
            $scope.username = $scope.password = null;
            $scope.$emit('event:logoutRequest');
            $location.url('/login');
        };

    });

    as.controller('LoginController', function($scope, $rootScope, $http, base64, $location) {
        $scope.login = function() {
            $scope.$emit('event:loginRequest', $scope.username, $scope.password);
        };
    });

    as.controller('PasswordController', function($scope, $rootScope, $http, base64, $location) {
        var actionUrl = 'api/user/changepw';
        $scope.data = {};

        $scope.changePwd = function() {
            var username = $rootScope.user.username;
            var newpwd = $scope.data.newPassword;
            $http.put(actionUrl, $scope.data)
                    .success(function(data) {
                        console.log(data);
                        $rootScope.user.password = newpwd;
                        $http.default.headers.common['Authorization'] = 'Basic ' + base64.encode(username + ':' + newpwd);
                        $location.url('/user/home');
                    })
                    .error(function(data) {
                        console.log(data);
                    });

        }

        $scope.cancel = function() {
            $location.url('/user/home');
        }

    });

    as.controller('ProfileController', function($scope, $rootScope, $http, base64, $location) {
        var actionUrl = 'api/user/updateProfile',
                load = function() {
                    $scope.data = {};
                    $scope.data.displayName = $rootScope.user.displayName;
                };

        load();

        $scope.updateProfile = function() {
            var displayName = $scope.data.displayName;
            $http.put(actionUrl, $scope.data)
                    .success(function(data) {
                        console.log(data);
                        $rootScope.user.displayName = displayName;
                        $location.url('/user/home');
                    })
                    .error(function(data) {
                        console.log(data);
                    });

        };

        $scope.cancel = function() {
            $location.url('/user/home');
        };

    });


    as.controller('UserAdminController', function($scope, $http, i18n) {
        var actionUrl = 'api/users/',
                load = function() {
                    $http.get(actionUrl).success(function(data) {
                        $scope.users = data;
                    });
                };

        load();

        $scope.roleOpts = ['USER', 'ADMIN'];
        $scope.user = {};

        $scope.delete = function(idx) {
            if (confirm($.i18n.prop('confirm.delete'))) {
                $http.delete(actionUrl + $scope.users[idx].id).success(function() {
                    load();
                });
            }

        };

        $scope.initAdd = function() {
            $scope.user = {};
            $('#userDialog').modal('show');
        }

        $scope.save = function() {
            $http.post(actionUrl, $scope.user).success(function() {
                $('#userDialog').modal('hide');
                load();
            });
        };

        $scope.order = '+username';

        $scope.orderBy = function(property) {
            $scope.order = ($scope.order[0] === '+' ? '-' : '+') + property;
        };

        $scope.orderIcon = function(property) {
            return property === $scope.order.substring(1) ? $scope.order[0] === '+' ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down' : '';
        };
    });

    as.controller('NewPostController', function($scope, $http, i18n, $location) {
        var actionUrl = 'api/posts/';

        $scope.save = function() {
            $http.post(actionUrl, $scope.newPost).success(function() {
                $location.path('/posts');
            });
        };


        $scope.cancel = function() {
            $location.path('/posts');
        };

    });
    
    as.controller('NewListingController', function($scope, $http, i18n, $location) {
        $scope.newlisting = new Object();
        $scope.newlisting.content = new Object();
        $scope.newlisting.content.address = new Object();

        var actionUrl = 'api/listing/';
        
        states = function() {
            $http.get('api/state/').success(function(data) {
                $scope.states = data;
            });
        };
        
        states();

        
        $scope.updateCity= function() {
        var stateUrl = 'api/state/'+ $scope.newlisting.content.address.state;
            $http.get(stateUrl).success(function(data) {
                $scope.cities = data.cities;
            });
        };
        
        $scope.updateLocation= function() {
            var stateUrl = 'api/city/'+ $scope.newlisting.content.address.city;
                $http.get(stateUrl).success(function(data) {
                    $scope.locations = data.locations;
                });
        };


        $scope.save = function() {
            $http.post(actionUrl, $scope.newlisting).success(function() {
                $location.path('/listing');
            });
        };

        $scope.cancel = function() {
            $location.path('/listing');
        };
        
        

        $scope.document = {};
        $scope.setTitle = function(fileInput) {
        var file=fileInput.value;
        var filename = file.replace(/^.*[\\\/]/, '');
        var title = filename.substr(0, filename.lastIndexOf('.'));
        $("#title").val(title);
        $("#title").focus();
        $scope.document.title=title;
    };

        $scope.uploadFile=function(){
         var formData = new FormData();
         formData.append("file",file.files[0]);
         formData.append("id",20);
         	 $.ajax({
			    url: 'api/document',
			    data: formData,
			    dataType: 'text',
			    processData: false,
			    contentType: false,
			    type: 'POST',
			    success: function(data){
			      $('#result').html(data);
			    }
		  });


      };
    });

    

    as.controller('DetailsController', function($scope, $http, $routeParams, $q) {

        var actionUrl = 'api/posts/',
                loadComments = function() {
                    $http.get(actionUrl + $routeParams.id + '/comments')
                            .success(function(data) {
                                $scope.comments = data;
                            });
                },
                load = function() {
                    $q.all([
                        $http.get(actionUrl + $routeParams.id),
                        $http.get(actionUrl + $routeParams.id + '/comments')
                    ])
                            .then(function(result) {
                                $scope.post = result[0].data;
                                $scope.comments = result[1].data;
                            });
                };

        load();

        $scope.newComment = {};

        $scope.save = function() {
            $http.post(actionUrl + $routeParams.id + '/comments', $scope.newComment).success(function() {
                $('#commentDialog').modal('hide');
                loadComments();
                $scope.newComment = {};
            });
        };

        $scope.delComment = function(idx) {
            $http.delete('api/comments/' + $scope.comments[idx].id).success(function() {
                $scope.comments.splice(idx, 1);
            });
        };
        
        $scope.addComment=function(){
            $('#commentDialog').modal('show');
        };

    });

    as.controller('PostsController', function($scope, $http, i18n) {
        var actionUrl = 'api/posts/',
                load = function() {
                    $http.get(actionUrl).success(function(data) {
                        $scope.posts = data;
                    });
                };

        load();

        $scope.delPost = function(idx) {
            if (confirm($.i18n.prop('confirm.delete'))) {
                $http.delete(actionUrl + $scope.posts[idx].id).success(function() {
                    $scope.posts.splice(idx, 1);
                });
            }
        };

    });
    
    
    as.controller('ListingController', function($scope, $http, i18n) {
        var actionUrl = 'api/listing/',
                load = function() {
                    $http.get(actionUrl).success(function(data) {
                        $scope.listing = data;
                    });
                };

        load();

        $scope.delPost = function(idx) {
            if (confirm($.i18n.prop('confirm.delete'))) {
                $http.delete(actionUrl + $scope.posts[idx].id).success(function() {
                    $scope.posts.splice(idx, 1);
                });
            }
        };

    });

}());
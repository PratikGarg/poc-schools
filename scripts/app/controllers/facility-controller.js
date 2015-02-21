modules.controllerModule.controller('facilityController', ['$scope', '$sharedService',
    function ($scope, $sharedService) {
        $scope.facilityName = "Presidium";
        $scope.facilityDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.  ";
        $scope.overview = {
            heading: "Overview",
            list: [{
                name: "Establishment Date",
                detail: "12-Jan-2015",
                icon: "fa-university"
            },
            {
                name: "Medium",
                detail: "English",
                icon: "fa-leaf"
            },
            {
                name: "Type",
                detail: "Dummy",
                icon: "fa-leaf"
            },
            {
                name: "Affiliation",
                detail: "ff",
                icon: "fa-calendar"
            },
            {
                name: "Foreign Languages",
                detail: "German",
                icon: "fa-header"
            },
            {
                name: "Streams Available",
                detail: "Science",
                icon: "fa-calendar"
            },
            {
                name: "Classes Applicable",
                detail: "Nursery-12th",
                icon: "fa-calendar"
            },
            {
                name: "Number of students",
                detail: "500",
                icon: "fa-users"
            },
            {
                name: "Number of Teachers",
                detail: "100",
                icon: "fa-users"
            }
            ,
            {
                name: " School Timmings",
                detail: "9:00 AM - 3:00 PM",
                icon: "fa-dashboard"
            }
            ,
            {
                name: "Vacation Cycle",
                detail: "June-July",
                icon: "fa-calendar"
            }
            ,
            {
                name: "Admission Fee",
                detail: "100",
                icon: "fa-inr"
            }
            ,
            {
                name: "Smart Class",
                detail: "Yes",
                icon: "fa-users"
            }]
        };

        $scope.transportation = {
            heading: "Transportation",
            list: [{
                name: "Transporation modes",
                detail: "Bus",
                icon: "fa-cab"

            },
            {
                name: "Number of Buses",
                detail: "10",
                icon: "fa-bus"
            },
            {
                name: "Area Covered",
                detail: "Delhi/NCR",
                icon: "fa-random"
            },
            {
                name: "Average Charges",
                detail: "Rs 5000",
                icon: "fa-inr"
            },
            {
                name: "Air Conditioned",
                detail: "Yes",
                icon: "fa-credit-card"
            }]
        };

        $scope.facility = {
            heading: "Facility",
            list: [{
                name: "Cricket Ground",
                detail: "Yes",
                icon: "fa-leaf"
            },
            {
                name: "Basketball",
                detail: "Yes",
                icon: "fa-futbol-o"
            },
            {
                name: "Table Tennis",
                detail: "Yes",
                icon: "fa-vector-path-all"
            },
            {
                name: "Lawn Tennis",
                detail: "Yes",
                icon: "fa-vector-path-all"
            },
            {
                name: "Arts and Crafts",
                detail: "Yes",
                icon: "fa-file-picture-o"
            },
            {
                name: "Swimming Pool",
                detail: "Yes",
                icon: "fa-pool"
            }]
        };

        $scope.images = {
            id: "#elastic",
            list: [{
                name: "test",
                detail: "ff",
                icon: "fa-leaf"
            }]
        };

        $scope.social = {
            id: "social-list",
            networks: ['twitter', 'facebook', 'tumblr', 'pinterest', 'googleplus'],
            orientation: 'vertical',
            urlToShare: 'http://www.pratikgarg.com',
            affix: 'right center'
        };

        $scope.videos = {
            list: [{
                name: "test",
                url: ""
            }, {
                name: "test",
                url: ""
            }, {
                name: "test",
                url: ""
            }, {
                name: "test",
                url: ""
            }]
        };


        $scope.admission = {
            heading: "Admission"
        };


        $scope.events = {
            heading: "Events",
            list: [{
                name: "Annual Cultural Function",
                icon: "fa-mortar-board",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Farewell",
                icon: "fa-music",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },

            {
                name: "Sports Function",
                icon: "fa-arrows-alt",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Summer Camp",
                icon: "fa-flash",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }]
        };

        $sharedService.fixHeader("#navbar");


    }]);
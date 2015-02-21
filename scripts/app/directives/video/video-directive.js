modules.directiveModule.directive('videoDetail', function ($timeout, $pluginService) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            videoList:"=info"
        },
        link: function (scope, element) {
            $timeout(function () {
              
                $('.custom-carousel').each(function() {
                    var owl = jQuery(this),
                        itemsNum = $(this).attr('data-appeared-items'),
                        sliderNavigation = $(this).attr('data-navigation');

                    if (sliderNavigation == 'false' || sliderNavigation == '0') {
                        var returnSliderNavigation = false;
                    } else {
                        var returnSliderNavigation = true;
                    }
                    if (itemsNum == 1) {
                        var deskitemsNum = 1;
                        var desksmallitemsNum = 1;
                        var tabletitemsNum = 1;
                    } else if (itemsNum >= 2 && itemsNum < 4) {
                        var deskitemsNum = itemsNum;
                        var desksmallitemsNum = itemsNum - 1;
                        var tabletitemsNum = itemsNum - 1;
                    } else if (itemsNum >= 4 && itemsNum < 8) {
                        var deskitemsNum = itemsNum - 1;
                        var desksmallitemsNum = itemsNum - 2;
                        var tabletitemsNum = itemsNum - 3;
                    } else {
                        var deskitemsNum = itemsNum - 3;
                        var desksmallitemsNum = itemsNum - 6;
                        var tabletitemsNum = itemsNum - 8;
                    }
                    var options = {
                        slideSpeed: 300,
                        stopOnHover: true,
                        autoPlay: false,
                        navigation: returnSliderNavigation,
                        pagination: false,
                        lazyLoad: true,
                        items: itemsNum,
                        itemsDesktop: [1000, deskitemsNum],
                        itemsDesktopSmall: [900, desksmallitemsNum],
                        itemsTablet: [600, tabletitemsNum],
                        itemsMobile: false,
                        transitionStyle: "goDown",
                    };

                    $pluginService.carousel(owl, options);
                });
                $('.touch-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
                $('.touch-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
            }, 500);

        },
        controller: function ($scope) {

   
         
        },
        templateUrl: "/scripts/app/directives/video/video-template.html"
    };
})
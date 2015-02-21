modules.serviceModule.service('$sharedService', function () {
    this.fixHeader = function (target) {
        var navbar = $(".navbar");
        var fixClass = "fixed-header";
        var navbarFixed = "navbar-fixed";
        var docElem = document.documentElement;
        var stickyNavTop = navbar.offset().top;
        var adjustDiv = $("<div/>").height(navbar.height());
        $(window).scroll(function () {
            scrollPage();
        });

        $('body').scrollspy({ target: target });
        $('.navbar-nav li').bind('click', function (event) {
            var $anchor = $(this).find('a');
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top -80
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });

        function scrollPage() {
            var sy = scrollY();
            if (sy >= stickyNavTop) {
                navbar.addClass(navbarFixed);
                navbar.addClass(fixClass);
                navbar.before(adjustDiv);
            }
            else {
                navbar.removeClass(navbarFixed);
                navbar.removeClass(fixClass);
                adjustDiv.remove();
            }
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

    }
});
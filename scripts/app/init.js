$(document).ready(function () {
    setLoader();
    function setLoader() {
        var offset = 200;
        var backTop = $('.back-to-top');
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                backTop.fadeIn(400);
            } else {
                backTop.fadeOut(400);
            }
        });
        backTop.click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
        $('#loader').fadeOut();
    }
});
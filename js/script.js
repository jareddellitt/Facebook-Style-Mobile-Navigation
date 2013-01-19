(function ($) {
    var $body = $('body'),
        $wrapper = $('#wrapper'),
        $main = $('#main'),
        $nav = $('#nav'),
        winHeight = window.outerHeight,
        navMooved = false;

    function moveNav() {
        $nav.prependTo($body).addClass('visible');
        navMooved = true;
    }

    $('#activator').on(Modernizr.touch ? 'touchend' : 'click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!navMooved) {
            moveNav();
        }

        $body.toggleClass('slid-right');
    });

    $(document).on('.slid-right #main', Modernizr.touch ? 'touchstart' : 'mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $main.on('webkitTransitionEnd transitionend oTransitionEnd', function (e) {
        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');
    });

    if ($wrapper.height() < winHeight) {
        $wrapper.height(winHeight);
    }

    window.scrollTo('1px');

}($));
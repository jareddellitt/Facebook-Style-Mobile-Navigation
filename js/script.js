(function ($, doc) {
    var $body = $('body'),
        $wrapper = $('#wrapper'),
        $main = $('#main'),
        $nav = $('#nav'),
        visible = false,
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

        $body.toggleClass('nav-showing');
    });

    $(doc).on('.slid-right #main', Modernizr.touch ? 'touchstart' : 'mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $main.on('webkitTransitionEnd transitionend oTransitionEnd', function (e) {
        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');

        visible = !visible;

        if (!visible) {
            $nav[0].scrollTop = 0;
        }
    });

    if ($wrapper.height() < winHeight) {
        $wrapper.height(winHeight);
    }

    window.scrollTo('1px');

}($, document));
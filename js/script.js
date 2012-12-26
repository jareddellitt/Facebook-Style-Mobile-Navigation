(function ($) {
    var $html = $('html'),
        $body = $('body'),
        $content = $('#content'),
        $main = $('#main'),
        $nav = $('#nav'),
        winHeight = $(window).height(),
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

        $main.toggleClass('slid-right');
    });

    $main.on('webkitTransitionEnd transitionend oTransitionEnd', function (e) {
        $html.toggleClass('no-scrolling');
        $body.toggleClass('no-scrolling');
        $nav.toggleClass('scroll');
    });

    if ($content.height() < winHeight) {
        $content.height(winHeight);
    }

}($));
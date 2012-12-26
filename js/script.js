(function ($) {
    var $html = $('html'),
        $body = $('body'),
        $content = $('#content'),
        $main = $('#main'),
        $nav = $('#nav');	

	$('#activator').on(Modernizr.touch ? 'touchend' : 'click', function (e) {
		e.preventDefault();
        e.stopPropagation();
		
        $main.toggleClass('slid-right');
        $nav.toggleClass('scroll');
	});

    $main.on('webkitTransitionEnd transitionend oTransitionEnd', function (e) {
        $html.toggleClass('no-scrolling');
        $body.toggleClass('no-scrolling');
    });

    $nav.prependTo($('body'));

    if ($content.height() < $nav.height()) {
        $content.height($nav.height());
    }

}($));
(function ($) {
	var $content = $('#content');

	$('#nav').prependTo($content);

	$('#activator').on('click touchend', function (e) {
		e.preventDefault();
        e.stopPropagation();

		$content.toggleClass('nav-showing');
	});

}(jQuery));
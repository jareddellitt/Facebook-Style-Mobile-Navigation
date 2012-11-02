(function ($) {
	var $content = $('#content');

	$('#nav').prependTo($content);

	$('#activator').on('click', function (e) {
		e.preventDefault();

		$content.toggleClass('nav-showing');
	});

}(jQuery));
(function ($) {
	var $content = $('#content');

	$('#nav').prependTo($content);

	$('#activator').on('click tap', function (e) {
		e.preventDefault();
        e.stopPropagation();

		$content.toggleClass('nav-showing');
	});

}($));
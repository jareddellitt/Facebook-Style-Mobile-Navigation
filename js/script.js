(function (doc, $) {
	var $content = $('#content'),
		$doc = $(doc);

	function toggle(e) {
		e.preventDefault();
		e.stopPropagation();

		$content.toggleClass('nav-showing');
	}

	$('#nav').prependTo($content);

	$('#activator').bind('click', toggle);

}(document, jQuery));
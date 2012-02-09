(function (doc, $) {
	var $content = $('#content'),
		$doc = $(doc);

	function toggle(e) {
		e.preventDefault();
		e.stopPropagation();

		$content.toggleClass('menu-visible');
	}

	$('#nav').prependTo($content).css({
		height: $doc.height()
	});

	$('#activator').bind('touchstart, click', toggle);

}(document, jQuery));
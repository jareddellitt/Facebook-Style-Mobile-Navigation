$(function () {
	var $content = $("#content");

	function toggle(e) {
		e.preventDefault();
		e.stopPropagation();

		$('#content').toggleClass('menu-visible');
	}

	$('#activator').bind('touchstart, click', toggle);
});
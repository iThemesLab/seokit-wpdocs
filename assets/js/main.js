$(function(){
	$('a.ps').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top -20
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	$('body').scrollspy({ target: '#navbar', offset:20 })
});
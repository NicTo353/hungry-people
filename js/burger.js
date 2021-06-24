$(document).ready(function() {
	$('.burger,.nav__logo').click(function(event) {
		$('.nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
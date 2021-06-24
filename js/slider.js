$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		customPaging: function(slider, i) {      
      return '<div class="custom-slick-dots" id=' + i + "></div>";
		}
	});
});

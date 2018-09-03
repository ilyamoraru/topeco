jQuery(document).ready(function() {
	initMobileSlider();
});

jQuery(window).on('resize', function() {
	initMobileSlider();
});

function initMobileSlider () {
	if(jQuery(window).width() <= 544) {
		if(jQuery('.mobileslider1').length) {
			jQuery('.mobileslider1 .span_12').removeClass('owl-carousel');
			jQuery('.mobileslider1 .span_12').addClass('owl-carousel');

			jQuery('.mobileslider1 .span_12').owlCarousel({
				autoplay:true,
				loop:true,
				nav:false,
				dots:true,
				items:1,
				margin: 0,
				center: false
			});
		}

		if(jQuery('.mobileslider2').length) {
			jQuery('.mobileslider2 .standard_section .span_12').removeClass('owl-carousel');
			jQuery('.mobileslider2 .standard_section .span_12').addClass('owl-carousel');

			jQuery('.mobileslider2 .standard_section .span_12').owlCarousel({
				autoplay:true,
				loop:true,
				nav:false,
				dots:true,
				items:1,
				margin: 0,
				center: false
			});
		}

		if(jQuery('.customslider-tabs').length) {
			jQuery('.customslider-tabs .span_12').removeClass('owl-carousel');
			jQuery('.customslider-tabs .span_12').addClass('owl-carousel');

			jQuery('.customslider-tabs .span_12').owlCarousel({
				autoplay:true,
				loop:true,
				nav:false,
				dots:true,
				items:1,
				margin: 0,
				center: false
			});
		}
	}
}

//customslider-tabs
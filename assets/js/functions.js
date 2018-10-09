(function ($) {
  'use strict';

  $(document).ready(function () {

	$(window).scroll(function() {
	if(($(window).scrollTop() > 80) && (screen.width >= 660)) {
		$('#glavmenu').addClass('fixmenu container-fluid');
		$('#glavmenu').removeClass('container');
		$('body').css({'margin-top':'52px'});
	};
	});

	$(window).scroll(function() {
		if(($(window).scrollTop() < 80) && (screen.width >= 660)) {
			$('#glavmenu').removeClass('fixmenu container-fluid');
			$('#glavmenu').addClass('container');
			$('body').css({'margin-top':'0'});
		};
	});
/*
	$(".navbar a").click(function(){
	  $("body,html").animate({
	   scrollTop:$("#" + $(this).data('value')).offset().top
	  },1000)
	  
	 });
*/
/*	$('#glavmenu').find('a[href*=#]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 40}, 1000);
		e.preventDefault();
		return false;
	});
*/

/*	$('.soglasen').click(function() {
	$('#soglasen').css({display: 'block'});
	});
	$('#fz_close').click(function() {
		$('#soglasen').css({display: 'none'});
	});

	$('#fz_hide').click(function(event) {
	    if ($(event.target).closest('#fz_content').length) return;
	    $('#soglasen').css({display: 'none'});
	    event.stopPropagation();
	 });
*/
	var owl;
	owl = $('.homeslider');
	  owl.owlCarousel({
	    items: 1,
	  	loop: true,
	  	center: false,
	  	autoplay: true,
		autoplayTimeout: 6000,
		nav: true,
		navText: ["<i class='glyphicon glyphicon-chevron-left' aria-hidden='true'></i>","<i class='glyphicon glyphicon-chevron-right' aria-hidden='true'></i>"],
		dots: true,
		dotsEach: false,
		autoplayHoverPause: false,
		mouseDrag: false,
		responsive:{
	            0:{
	                items:1
	            },
	            600:{
	                items:1
	            },
	            1000:{
	                items:1
	            }
	    	}
		});

	  owl = $('.slider1');
	  owl.owlCarousel({
	    items: 4,
	  	loop: true,
	  	center: false,
	  	autoplay: true,
		autoplayTimeout: 6000,
		nav: true,
		navText: ["<i class='glyphicon glyphicon-chevron-left' aria-hidden='true'></i>","<i class='glyphicon glyphicon-chevron-right' aria-hidden='true'></i>"],
		dots: true,
		dotsEach: false,
		autoplayHoverPause: false,
		mouseDrag: false,
		responsive:{
	            0:{
	                items:1,
	                dots: false
	            },
	            600:{
	                items:2
	            },
	            1000:{
	                items:4
	            }
	    	}
		});

  }); //end ready

}(jQuery));
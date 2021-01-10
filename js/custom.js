(function ($) {

	"use strict";
	// HEADER
	$(".navbar").headroom();
	const $dropdown = $(".dropdown");
	const $dropdownToggle = $(".dropdown-toggle");
	const $dropdownMenu = $(".dropdown-menu");
	const showClass = "show";
	$dropdown.hover(
	  function() {
	    const $this = $(this);
	    $this.addClass(showClass);
	    $this.find($dropdownToggle).attr("aria-expanded", "true");
	    $this.find($dropdownMenu).addClass(showClass);
	  },
	  function() {
	    const $this = $(this);
	    $this.removeClass(showClass);
	    $this.find($dropdownToggle).attr("aria-expanded", "false");
	    $this.find($dropdownMenu).removeClass(showClass);
	  }
	);

	// Prevent mobile nav scrollingss
	$('.navbar-collapse').on('shown.bs.collapse', function() { 
	   $('body').css('overflow', 'hidden');
	});
		
	$('.navbar-collapse').on('hidden.bs.collapse', function() {
	   $('body').css('overflow', 'auto');
	});

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox({maxWidth: 1500});
	});

	//capture scroll any percentage
	$(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = 
	    
	    $(document).height(), winheight = $(window).height();
	 			var scrolled = (wintop/(docheight-winheight))*100;
	  
	  		$('.scroll-line').css('width', (scrolled + '%'));
	});

	$(document).scroll(function () {
		var d = $('#discovery').offset().top - 500;
		var a = $('#analysis').offset().top - 500;
		var i = $('#ideation').offset().top - 500;
		var p = $('#prototyping').offset().top - 500;
		var e = $('#evaluation').offset().top - 500;
		var it = $('#iteration').offset().top - 500;
		var r = $('#reflection').offset().top - 500;
    	var y = $(this).scrollTop();

    	if (y > (d+200) && y < r) {
        	$('.section-nav').fadeIn();
    	} else {
        	$('.section-nav').fadeOut();
    	}

		$('.case-section').each(function () {

	        if ( d < y && y < a ) {
	            $('.nav-disc').addClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').removeClass("active");
	        } else if (a < y && y < i) {
	            $('.nav-disc').removeClass("active");
	            $('.nav-ana').addClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').removeClass("active");
	        } else if (i < y && y < p) {
	            $('.nav-disc').removeClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').addClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').removeClass("active")
	        } else if (p < y && y < e) {
	            $('.nav-disc').removeClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').addClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').removeClass("active");
	        } else if (e < y && y < it) {
	            $('.nav-disc').removeClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').addClass("active");
	            $('.nav-iter').removeClass("active");
	        } else if (it < y && y < r) {
	            $('.nav-disc').removeClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').addClass("active");
	        } else {
	        	$('.nav-disc').removeClass("active");
	            $('.nav-ana').removeClass("active");
	            $('.nav-idea').removeClass("active");
	            $('.nav-proto').removeClass("active");
	            $('.nav-eval').removeClass("active");
	            $('.nav-iter').removeClass("active");
	        }
	    });
	});

})(jQuery);

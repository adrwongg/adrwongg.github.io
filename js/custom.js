(function ($) {

	"use strict";
	// HEADER
	$(".navbar").headroom();

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
})(jQuery);

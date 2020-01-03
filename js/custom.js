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

})(jQuery);

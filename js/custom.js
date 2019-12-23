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

})(jQuery);

// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

  $('div.ui-page').live("swipeleft", function(){
  	var nextpage = $(this).next('div[data-type="block"]');
  	// swipe using id of next page if exists
  	if (nextpage.length > 0) {
  		$.mobile.changePage(nextpage, 'slide');
  	}
  });

  $('div.ui-page').live("swiperight", function(){
  	var prevpage = $(this).prev('div[data-type="block"]');
  	// swipe using id of next page if exists
  	if (prevpage.length > 0) {
  		$.mobile.changePage(prevpage, 'slide', true);
  	}
  });

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
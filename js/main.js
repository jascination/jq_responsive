$(document).ready(function(){
	
	// First, wrap the entire body in 3 divs. This is important for CSS specificity, so that the .row-fluid and .span styles override any user-defined styles
	
	$('body div:first-child').wrap('<div id="responsiveWrap1" class="responsive-wrap" />').wrap('<div id="responsiveWrap2" class="responsive-wrap" />').wrap('<div id="responsiveWrap3" class="responsive-wrap" />');
	
	
	// Make all images responsive
	$('img').each(function(){
		$(this).css('max-width', '100%');
	});

	// Get all the elements we want to make responsive. There could be more to add here
	
	var theElements = ['div', 
					'section',
					'table',
					'article',
					'aside',
					'details',
					'figcaption',
					'figure',
					'footer',
					'header',
					'hgroup',
					'nav',
					'section',
					'summary'];
	
	// Body's width onLoad goes in a variable. We store this because we're about to change it / will need to change back
	
	var bodyWidth = $('body').width();
	
	// Change body's width to 1280px. This is because we need to see what elements' widths are 'meant' to look like at full width (regardless of what the browser is set to) before we start changing things
	
	$('body').css('width','1280px');
	
	for (var i=0; i<theElements.length; i++){

		$(theElements[i]).not('.responsive-wrap').each(function(){
			var theWidth = $(this).width();
			var parentWidth = $(this).parent().width();
			$(this).css('max-width', theWidth + "px"); 
			
			if($(this).parents('.row-fluid').length < 1){
				$(this).addClass("row-fluid").css("width", "100%");
				$(this).children('div:has(div:eq(1))').addClass("rowChild");
			}
			
		});
		
		$(theElements[i]).not('.row-fluid').not('.responsive-wrap').each(function(i, elemen){
			var theWidth = $(this).width();
			var parentWidth = $(this).parent().width();			
			$(this).css('max-width', theWidth + "px"); 
			
			var percWidth = $(this).width() / $(this).parent().width() * 100 - 1;
				
			function spanClass(percentWidth) {
				return 'span' + Math.round(percentWidth / (100/12));
			}
			
			$(this).addClass(spanClass(percWidth));			

		});
	}
	
	// Change the body size back to the original width, then clear the width css to avoid conflicts
	
	$('body').css('width', bodyWidth);
	$('body').css('width', "");
	
	
	//Get all .span12 elements which have child divs and convert to .row-fluid
	
	$('.span12').filter(function() {
		return $(this).children('div').length >= 1;
	}).addClass("row-fluid").removeClass("span12")
	
	// Get remaining .span12 elements (which have no child divs) and wrap in a .row-fluid
	
	$('.span12').wrap("<div class='row-fluid' />");

	
});
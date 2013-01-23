$(document).ready(function(){
	
	$('img').each(function(){
		$(this).css('max-width', '100%');
	});

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

					
	for (var i=0; i<theElements.length; i++){

		$(theElements[i]).each(function(){
			var theWidth = $(this).width();
			var parentWidth = $(this).parent().width();
			$(this).css('max-width', theWidth + "px"); 
			
			if($(this).parents('.row-fluid').length < 1){
				$(this).addClass("row-fluid").css("width", "100%");
				$(this).children('div:has(div:eq(1))').addClass("rowChild");
			}
			// Might not need this level of detail
			$('.rowChild').children('div:has(div:eq(1))').addClass("JamesThing");
		});


		

		
		
		$(theElements[i]).not('.row-fluid').each(function(i, elemen){
			var theWidth = $(this).width();
			var parentWidth = $(this).parent().width();			
			$(this).css('max-width', theWidth + "px"); 
			
			var percWidth = $(this).width() / $(this).parent().width() * 100 - 1;
		/*	if (percWidth < 6.382978723404255){
				$(this).addClass("span1");
			}else if((percWidth > 6.382978723404255) && (percWidth < 14.893617021276595)){
				$(this).addClass("span2");
			}else if((percWidth >14.893617021276595) && (percWidth < 23.404255319148934)){
				$(this).addClass("span3");
			}else if((percWidth >23.404255319148934) && (percWidth < 31.914893617021278)){
				$(this).addClass("span4");
			}else if((percWidth >31.914893617021278) && (percWidth < 40.42553191489362)){
				$(this).addClass("span5");
			}else if((percWidth >40.42553191489362) && (percWidth < 48.93617021276595)){
				$(this).addClass("span6");
			}else if((percWidth >48.93617021276595) && (percWidth < 57.44680851063829)){
				$(this).addClass("span7");
			}else if((percWidth >57.44680851063829) && (percWidth < 65.95744680851064)){
				$(this).addClass("span8");
			}else if((percWidth >65.95744680851064) && (percWidth < 74.46808510638297)){
				$(this).addClass("span9");
			}else if((percWidth >74.46808510638297) && (percWidth < 82.97872340425532)){
				$(this).addClass("span10");
			}else if((percWidth >82.97872340425532) && (percWidth < 91.48936170212765)){
				$(this).addClass("span11");
			}else if((percWidth >91.48936170212765) && (percWidth <= 101)){
				$(this).addClass("span12");
			}else{
				console.log("What's this?");
			}
		*/
		
		function spanClass(percentWidth) {
			return 'span' + Math.round(percentWidth / (100/12));
		}
		
		$(this).addClass(spanClass(percWidth));


		
		
			

		});
	}
	
	//Get all .span12 elements which have child divs and convert to .row-fluid
	
	$('.span12').filter(function() {
		return $(this).children('div').length >= 1;
	}).addClass("row-fluid").removeClass("span12")
	
	// Get remaining .span12 elements (which have no child divs) and wrap in a .row-fluid
	
	$('.span12').wrap("<div class='row-fluid' />");

	

$('.row-fluid').each(function (i, ele) {
    var total = 0;
    var currentSpans = [];

    $(ele).children().each(function (i2, spans) {
        if (spans.className.indexOf('span') != -1) {

			
            total += parseInt(spans.className.replace(/[A-Za-z$-]/g, ""), 10);
            currentSpans.push($(spans).attr('class'));
        }

    });


    console.log(currentSpans, total);
	if (total < 12){
		
		
	}
});

	
});
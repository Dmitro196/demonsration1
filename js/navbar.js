	
	var str=($('.block01').css('height'));
	var sticky=false;
	var nav = $('.navbar-inverse');
	
	$('.navbar-inverse').css('top',str.substring(0, str.length - 2)+'px');
	
	if ($(this).scrollTop() > ($('.block01').css('height')).substring(0, ($('.block01').css('height')).length - 2)) {
		
		
            nav.addClass("f-nav");//fixd navbar in css
        } else {
	
		
            nav.removeClass("f-nav");
        }
	$(window).resize(function(){
	
	var str2=($('.block01').css('height'));
	$('#affix-nav').attr('data-offset-top',str2.substring(0, str2.length - 2));
	$('#affix-nav').css('top',str2.substring(0, str2.length - 2));
	$('.navbar-inverse').css('top',str2.substring(0, str2.length - 2)+'px');
	
	});
	
	jQuery("document").ready(function($){
     
    
     
    $(window).scroll(function () {
	
	
        if ($(this).scrollTop() > ($('.block01').css('height')).substring(0, ($('.block01').css('height')).length - 2)) {
		
		
            nav.addClass("f-nav");
        } else {
	
		
            nav.removeClass("f-nav");
        }
    });
  
});
	
$(document).ready(function(){
	
	var $window = $(window);
	
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
    
    $('div[data-type="images"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '20% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });   
        
});


// anchor scroll

$(window).on("load", function () {
    
    var urlHash = window.location.href.split("#")[1];

    $('html,body').animate({
        scrollTop: $('#' + urlHash).offset().top-0
    }, 50);
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    
    
    $('html,body').animate({
	  scrollTop: target.offset().top-0
	}, 1500);
	return false;
  
});


$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-0
	        }, 1500);
	        return false;
	      }
	    }
	  });
	});


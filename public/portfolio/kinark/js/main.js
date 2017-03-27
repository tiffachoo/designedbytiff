// **GLOBAL VARIABLES**

var scrolledPast = false ; // variable to store state of navbar

var navExpanded = false; // variable to toggle expansion of menu options in bottom nav

// function to handle navbar collapse on scroll
function navCollapse () {
	
	if ( $(document).scrollTop() > 2500 ) {
                        
        $("#mainDrawing").velocity(
                        {
                        opacity: 0,
                        display: "none" }, 
                        {
                        duration: 0
                        });
	
	}
	 
    // determine whether page has scrolled past 100px
    if ( $(document).scrollTop() > 100 && scrolledPast == false ) {
    
        // class that changes height and margins of top navbar
        $("#topbar").addClass("topbar-scrolled");
        
        // shrinks main logo portion
        $("#headerLogo").stop().velocity(
                        { 
                        scale: 0.75,
                        translateY: -25,
                        translateX: -55 }, 
                        {
                        duration: 500,
                        easing: "ease-in-out"
                        });
                                                     
        // changes colour of main logo portion                
        $(".logoKinarktext").stop().velocity(
                        {
                        fill: "#00467f"}, 
                        {
                        duration: 300
                        });
        
        // hides white 'foundation' logo portion
        $("#logoFoundationtext").stop().velocity(
                        {
                        opacity: 0 }, 
                        {
                        duration: 300
                        });
                        
        // hides first drawings
        $("#arrowShine, .headerQuote").stop().velocity(
                        {
                        opacity: 0,
                        display: "none" }, 
                        {
                        duration: 300
                        });
        
        // transitions coloured 'foundation' logo portion               
        $("#logoFoundationBlock").velocity(
                        {
                        opacity: 1,
                        translateX: 250 }, 
                        {
                        duration: 600,
                        easing: "spring",
                        delay: 300
                        });
        
        // changes colour of 'heart' logo portion            
        $("#logoHeart").stop().velocity(
                        {
                        fill: "#69e8a8"}, 
                        {
                        duration: 300
                        });
        
        // moves links up with navbar             
        $("#link-list").stop().velocity(
                        {
                        translateY: -30}, 
                        {
                        duration: 500,
                        easing: "ease-in-out"
                        });
        
        // lightens main background image               
        $(".header-img").velocity(
                        {
                        opacity: 1 }, 
                        {
                        duration: 800
                        });
                        
        $("#mainDrawing").velocity(
                        {
                        opacity: 1,
                        display: "block" }, 
                        {
                        duration: 500,
                        delay: 200
                        });
                        
        drawHeader ();
          
        // toggles nav behaviour
        scrolledPast = true;
                        
    } else if ( $(document).scrollTop() < 100 && scrolledPast == true) {
        
        $("#topbar").removeClass("topbar-scrolled");
        
        $("#headerLogo").stop().velocity(
                        { 
                        scale: 1,
                        translateY: 0,
                        translateX: 0 }, 
                        {
                        duration: 500,
                        easing: "spring",
                        delay: 200
                        });
        
        $("#link-list").stop().velocity(
                        {
                        translateY: 0}, 
                        {
                        duration: 700,
                        easing: "spring"
                        });
                        
        $("#logoHeart").stop().velocity(
                        {
                        fill: "#FFFFFF"}, 
                        {
                        duration: 300
                        });
                        
        $(".logoKinarktext").stop().velocity(
                        {
                        fill: "#FFFFFF"}, 
                        {
                        duration: 300
                        });
        
        $("#logoFoundationtext").stop().velocity(
                        {
                        opacity: 1 }, 
                        {
                        duration: 300
                        });
                        
        // shows first drawings
        $("#arrowShine, .headerQuote").stop().velocity(
                        {
                        opacity: 1,
                        display: "block" }, 
                        {
                        duration: 500,
                        delay: 200
                        });
        
        drawLines ("#donateArrow", "1s", "0s");
                      
        $("#logoFoundationBlock").velocity(
                        {
                        opacity: 0,
                        translateX: 0 }, 
                        {
                        duration: 100
                        });
        
                        
        $(".header-img").velocity(
                        {
                        opacity: 0.55 }, 
                        {
                        duration: 300
                        });
                        
        $("#mainDrawing").velocity(
                        {
                        opacity: 0,
                        display: "none" }, 
                        {
                        duration: 200
                        });

        scrolledPast = false;
    }
};

// **FUNCTION FOR DRAWING SVG LINES ONTO SCREEN**
// accepts three arguments, 'lineDrawing' (".class" or "#id"), 'dur' ("2s" format), and del(ay)
function drawLines (lineDrawing, dur, del) {

    var path = document.querySelector(lineDrawing);

    var length = path.getTotalLength();

    // clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';

    // set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    // trigger layout draw (so styles are calculated & browser picks up the starting position before animating)
    path.getBoundingClientRect();

    // defines css transition
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + dur + ' ease-in-out ' + del;

    // GO!!!
    path.style.strokeDashoffset = '0';
    
};

function drawHeader () {
	
	drawLines ("#baby0", "1s", "0.7s");
	drawLines ("#baby1", "1s", "0.7s");
	drawLines ("#baby2", "1s", "0.7s");
	drawLines ("#baby3", "1s", "0.7s");
	drawLines ("#baby4", "1s", "0.7s");
	drawLines ("#baby5", "1s", "0.7s");
	
	drawLines ("#mother0", "1s", "0.7s");
	drawLines ("#mother1", "1s", "0.7s");
	drawLines ("#mother2", "1s", "0.7s");
	drawLines ("#mother3", "1s", "0.7s");
	drawLines ("#mother4", "1s", "0.7s");
	drawLines ("#mother5", "1s", "0.7s");
	drawLines ("#mother6", "1s", "0.7s");
	drawLines ("#mother7", "1s", "0.7s");
	drawLines ("#mother8", "1s", "0.7s");
	drawLines ("#mother9", "1s", "0.7s");
}

function logoMouseenter () {
    if (scrolledPast == false) {
        // changes colour of 'heart' logo portion            
        $("#logoHeart").stop().velocity(
                        {
                        fill: "#69e8a8",
                        translateY: -8}, 
                        {
                        duration: 100,
                        easing: "ease-out"
                        }).velocity(
                        {
                        translateY: 0}, 
                        {
                        duration: 500,
                        easing: "spring"
                        });
    } else if (scrolledPast == true) {
    
        // transitions coloured 'foundation' logo portion               
        $("#logoFoundationBlock").stop().velocity(
                        {
                        translateX: 270 }, 
                        {
                        duration: 50
                        }).velocity(
                        {
                        translateX: 250 }, 
                        {
                        duration: 800,
                        easing: "spring"
                        });
    }
}

function logoMouseleave () {
    if (scrolledPast == false) {
        // changes colour of 'heart' logo portion            
        $("#logoHeart").velocity(
                        {
                        fill: "#ffffff"}, 
                        {
                        duration: 200
                        });
    }
}

// **INIT CALLED BY DOCUMENT BOOTSTRAP**
function initStuff () {
    
	// cache the window object
	$window = $(window);
	
	// trigger navCollapse behaviour on scroll
	$(window).scroll(navCollapse);
	
	// draws arrow pointing to donate button
	drawLines ("#donateArrow", "1s", "0s");
	
	// fades in 'shine' around donate button
	$("#donateShine").stop().velocity(
                        {
                        opacity: 1}, 
                        {
                        duration: 500,
                        delay: 500
                        });
	
	// hover handlers for main logo
	$("#headerLogo").mouseenter(logoMouseenter)
	                .mouseleave(logoMouseleave);
	
};

// **DOCUMENT BOOTSTRAP**
$(document).ready(initStuff);
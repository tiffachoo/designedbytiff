/*
	CLASSES N THINGS!
	
	navBox - main colour boxes
	navIn - inner div of navBox containing text + links + icon
	subNav - links div
	subNavLink - actual link
	mainIcon - main icon
	subIcon - links' icons
	
	navClicked - sets width / height of navBox to 66.66%
	navUnclicked - sets width / height of navBox to 16.66%
	
	sectExpanded - sets width / height of navBox to 100%
	sectContracted - sets width / height of navBox to 0
	
*/

var checker = false;
	
	var headerText = [];

function initStuff () {

    // handles toggling of front page section box views
	$(".navBox").click(clickLink);
	
	// handles toggling of search overlay
    $("#searchBtn").click(showSearch);
        
    // handles toggling of search mode if dark overlay is clicked
    $(".overlay, .searchResults").click(function () {
        if ( $(".overlay").hasClass("overlayFilter") == true ) {
            showSearch();
        }
    });
    
    $(".navBox h2").each(
		function( index ) {
			headerText[index] = $(this).text();
		} 
    );
    

//  $("#searchResults").load("search-results.php");
	
}


function clickLink () {
    
    // shows all inner content of selected box
 	$(this)
 		.addClass("navClicked")
 		.removeClass("navUnclicked")
 		
 		.unbind("click")
 		
 		.find(".navIn").addClass("navInClicked")
 		.find(".navSub").css("display","block");
 		
 	$(this).find(".navIn").css("display","block");
 	
 	// selects .navBox class of the boxes not selected
 	// makes boxes smaller with .navUnclicked
	$(".navBox").not(this).each(
		function(){
			$(this)
				.addClass("navUnclicked")
				.removeClass("navClicked")
				.bind("click",clickLink);
		}
	);
	
	// selects child (.navIn) of the boxes not selected
	// hides unselected boxes' inner content
    $(".navIn").not($(this).find(".navIn"))
    	.css("display","none")
      	.removeClass("navInClicked");
    
    // calls function to change page  	
    $(".subNavLink").click(changePage);
    
    // icon hoverage!
    // display matching icons on mouseover
	$(".subNavLink").mouseover(
		function () {
			$(this).next(".subIcon").css("display","block");
			$(".mainIcon").css("visibility","hidden");
		}
	);
	
	$(".subNavLink").mouseout(
		function () {
			if (checker == false ) {
				$(this).next(".subIcon").css("display","none");
				$(".mainIcon").css("visibility","visible");
			}
		}
	); 	
	
	// display back button on header
	$(".headerIcon").css("display","block");
    
    // keeps dyk at 0 opacity until clicked
    $(".dyk").css("opacity","0");
    
    // shows did you know box
    $(".dykBox").css("display","block");
    
    $(".dykBox").click(
    	function () {
    		$(this).children(".dyk").css("opacity","1");
    	}
    );
    
	$("#backBtn").click(revertPage);
	
	// if selected box is clicked, calls function to revert page
    //$(".navClicked").click(revertPage);
    
    return false;
    
}


// changes page
// makes selected section cover screen
function changePage () {

	checker = true;
	
	// add expanded class to the nav box
    $(this).parents(".navBox")
 		.addClass("sectExpanded");

	 $(".navBox").not($(this).parents(".navBox"))
    	.addClass("sectContracted");
    
    $(".navBox")
    	.removeClass("navClicked")
    	.removeClass("navUnclicked");
    	
    //switch icon
	$(this).next(".subIcon").css("display","block");
	$(".mainIcon").css("visibility","hidden");
	
	// changes heading to match link clicked
	$(".navIn > h2").text($(this).text());
	
	// change font size / h2 block size
	$(".navIn > h2").addClass("pushMe");

	// hide links
	$(".subNavLink").css("display","none");
	
	// unbind click states
	$(".navBox").unbind("click");
	
	// show content
	$(this).prev(".fullPg").css("display","block");
	
	// hides did you know box
    $(".dykBox").css("display","none");
    $(".dyk").css("opacity","0");
    

	// stop revertPage() from running
//	return false;
	
	
	$("#backBtn").click(revertPage);
}
	
	
// reverts page back to original form 
function revertPage () {

	checker = false;
	
	$(".navClicked").unbind("click");
	$(".navBox").click(clickLink);
	
	// show and revert inside div
	$(".navIn").css("display","block");
	$(".navBox").find(".navIn").removeClass("navInClicked");
	
	// show links, but hide div
	$(".navSub").css("display","none");
	$(".subNavLink").css("display","block");
	
	// show / hide icon
	$(".mainIcon").css("visibility","visible");
	$(".subIcon").css("display","none");
	
	// hide full page text
	$(".fullPg").css("display","none");
	
	// change font size back
	$(".navIn > h2").removeClass("pushMe");
	
	// hide back button on header 
	$(".headerIcon").css("display","none");
	
	// hides did you know box
    $(".dykBox").css("display","none");
    $(".dyk").css("opacity","0");
	
	// get rid of box sizing classes
	$(".navBox")
		.removeClass("navClicked")
		.removeClass("navUnclicked")
		.removeClass("sectExpanded")
		.removeClass("sectContracted");
		
	
    
    $(".navBox h2").each(
		function( index ) {
			$(this).text(headerText[index]);
		} 
    );
	
// 	$("#infoNavIn > h2").text("Info");
// 	$("#toolsNavIn > h2").text("Tools");
// 	$("#reportsNavIn > h2").text("Reports");
}


function showSearch () {
        
    $(".searchBar").toggleClass("searchBarOpen");
    $("#searchResults").toggleClass("showSearch");
    $(".overlay").toggleClass("overlayFilter");
}


$(document).ready(initStuff);
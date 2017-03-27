/*
	Tiffany Choong - 100338609
	
	This program initializes when the page loads. It then adds functions to the visible 
	buttons so the user can navigate through the document. The left and right buttons 
	move the above scene off in order to access the next scene and does the opposite
	to move backward through the infographic. The main buttons show an overlay which 
	contain a video, article and graph. These show when the user clicks on the buttons 
	and animate onto the screen. These scenes and overlays are animated using "Velocity". 
	This program also contains the hovers for the costumes scene to show and hide 
	costumes as the user hovers over them. 

*/

// activates after the document loads
// binds functions to buttons 
function initInfographic () {
	
	// binds move function to the right button
	$("#btnRight").click(moveRightTwo);
	
	// makes the initial position of the hidden content divs off the screen
	hideContent();
	
	// binds functions to buttons to show content
	$("#btn01").click(showVideo);
	$("#btn02").click(showGraph);
	$("#btn03").click(showArticle);
	
	// on mouse over, moves spider upward 
	$("#scareSpidey").mouseover(
		function () {
			$("#spideyAll").velocity(
				{
					translateY: -500
				}
			);
		}
	);
	
	// on mouse out, moves spider downward after 1 second 
	$("#scareSpidey").mouseout(
		function () {
			$("#spideyAll").velocity(
				{
					translateY: [0, [ 250, 15 ]]
				}, {
					delay: 1000
				}
			);
		}
	);
	
}

// shows the video overlay on button click
function showVideo () {
	
	// shows container and moves into place
	$("#videoContainer")
		.css("display","block")
		.velocity(
			{
				translateY: 0
			}
		);
	
	// attaches function to close button
	$("#videoClose").click(hideContent);
	
}

// shows the graph overlay on button click
function showGraph () {

	// shows container and moves into place
	$("#graphContainer")
		.css("display","block")
		.velocity(
			{
				translateY: 0
			}
		);
		
	// attaches function to close button
	$("#graphClose").click(hideContent);
	
}

function showArticle () {

	// shows container and moves into place
	$("#articleContainer")
		.css("display","block")
		.velocity(
			{
				translateY: 0
			}
		);
		
	// attaches function to close button
	$("#articleClose").click(hideContent);
	
}

// activates when x button is clicked or ESC is pressed
// hides all overlaying divs by moving then upward by 1000 px
function hideContent () {

	$("#videoContainer").velocity(
		{
			translateY: -1000
		}
	);
	
	$("#graphContainer").velocity(
		{
			translateY: -1000
		}
	);
	
	$("#articleContainer").velocity(
		{
			translateY: -1000
		}
	);
}


// activates when right button is clicked on scene 1
// moves to scene 2
function moveRightTwo () {

	$("#sceneOne").velocity(
		{ 
			translateX: -1920 
		}
	);
	
	$("#btnRight")
		.unbind("click",moveRightTwo)
		.click(moveRightThree);
	
	$("#btnLeft")
		.css("display","block")
		.click(moveLeftOne);

}

// activates when right button is clicked on scene 2
// moves to scene 3
function moveRightThree () {

	$("#sceneTwo").velocity(
		{ 
			translateX: -1920 
		}
	);
	
	$("#btnRight")
		.unbind("click",moveRightThree)
		.click(moveRightFour);
	
	$("#btnLeft")
		.unbind("click",moveLeftOne)
		.click(moveLeftTwo);
	
	// calls function to show costumes
	// resets every time function is called	
	showCostumes();

}

// activates when right button is clicked on scene 3
// moves to scene 4
function moveRightFour () {

	$("#sceneThree").velocity(
		{ 
			translateX: -1920 
		}
	);
	
	$("#btnRight")
		.css("display","none")
		.unbind("click",moveRightFour);
	
	$("#btnLeft")
		.unbind("click",moveLeftTwo)
		.click(moveLeftThree);

}

// activates when left button is clicked one scene 2
// moves to scene 1
function moveLeftOne () {

	$("#sceneOne").velocity(
		{ 
			translateX: 0 
		}
	);
	
	$("#btnRight")
		.unbind("click",moveRightThree)
		.click(moveRightTwo);
	
	$("#btnLeft")
		.css("display","none")
		.unbind("click",moveLeftOne);

}

// activates when left button is clicked on scene 3
// moves to scene 2
function moveLeftTwo () {

	$("#sceneTwo").velocity(
		{ 
			translateX: 0 
		}
	);
	
	$("#btnRight")
		.unbind("click",moveRightFour)
		.click(moveRightThree);
	
	$("#btnLeft")
		.unbind("click",moveLeftTwo)
		.click(moveLeftOne);

}

// activates when left button is clicked on scene 4
// moves to scene 3
function moveLeftThree () {

	$("#sceneThree").velocity(
		{ 
			translateX: 0 
		}
	);
	
	$("#btnRight")
		.css("display","block")
		.click(moveRightFour);
	
	$("#btnLeft")
		.unbind("click",moveLeftThree)
		.click(moveLeftTwo);
	
	// calls function to show costumes
	// resets every time function is called		
	showCostumes();

}

// called when enters the corresponding scene
// shows costumes depending on button hovered over
function showCostumes () {

	// hides all when function initially gets called
	$("#witchShow,#animalShow,#batmanShow,#pirateShow,#zombieShow,#vampireShow")
		.css("display","none");	
		
	// on mouse over, shows witch costume and hides all others
	$("#witchBtn").mouseover(
		function () {
			$("#witchShow").css("display","block");
			$("#animalShow,#batmanShow,#pirateShow,#zombieShow,#vampireShow").css("display","none");
		}
	);
		
	// on mouse over, shows animal costume and hides all others
	$("#animalBtn").mouseover(
		function () {
			$("#animalShow").css("display","block");
			$("#witchShow,#batmanShow,#pirateShow,#zombieShow,#vampireShow").css("display","none");
		}
	);
		
	// on mouse over, shows batman costume and hides all others
	$("#batmanBtn").mouseover(
		function () {
			$("#batmanShow").css("display","block");
			$("#witchShow,#animalShow,#pirateShow,#zombieShow,#vampireShow").css("display","none");
		}
	);
		
	// on mouse over, shows pirate costume and hides all others
	$("#pirateBtn").mouseover(
		function () {
			$("#pirateShow").css("display","block");
			$("#witchShow,#animalShow,#batmanShow,#zombieShow,#vampireShow").css("display","none");
		}
	);
		
	// on mouse over, shows zombie costume and hides all others
	$("#zombieBtn").mouseover(
		function () {
			$("#zombieShow").css("display","block");
			$("#witchShow,#animalShow,#batmanShow,#pirateShow,#vampireShow").css("display","none");
		}
	);
	
	// on mouse over, shows vampire costume and hides all others
	$("#vampireBtn").mouseover(
		function () {
			$("#vampireShow").css("display","block");
			$("#witchShow,#animalShow,#batmanShow,#pirateShow,#zombieShow").css("display","none");
		}
	);

}

// gets keypress 
function hideEsc (e) {

	// if esc keypress is activated
	if (e.keyCode == 27) { 
		// calls hide content function
		hideContent();
	} 
}

// calls function upon keypress
$(document).keyup(hideEsc);

// starts function after document loads
$(document).ready(initInfographic);
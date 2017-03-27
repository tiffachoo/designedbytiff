/*
	This program stores the video file provided into a variable and uses play and pause
	controls to control the video. Volume may also be altered. 
*/


// stores the video file
var	videoClip;

// stores the volume controls
var	volumeControl;


//	function to set up video
function loadVideo()	{

	// stores the video clip into variable
	videoClip =	document.getElementById("video");
	
	// stores volume slider into variable 
	volumeControl =	document.getElementById("volume");
	
	// calls function if play or pause are clicked
	$("#play").bind("click",playVideo);
	$("#pause").bind("click",pauseVideo);	
	
	// calls function if volume slider is changed
	$("#volume").bind("change",changeVolume);
	
	// reset volume to half way
	volumeControl.value	= (volumeControl.max - volumeControl.min)/2;
	
	videoClip.volume = .5;	
	
	// pauses video if overlay is closed
	$("#videoClose").click(pauseVideo);
	
}

// play video
function playVideo () {	
	
	videoClip.play();
}

// pause video
function pauseVideo () {		
	
	videoClip.pause();
}

// changes volume
function changeVolume () {

	// calculates volume value
	videoClip.volume = parseInt(volumeControl.value)/parseInt(volumeControl.max);		
}


// starts function after document loads
$(document).ready(loadVideo);
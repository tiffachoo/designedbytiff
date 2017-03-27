function showNav () {
	$("nav")
		.addClass("helloNav")
		.addClass("helloBg");
	
	$("#boltIcon")
		.unbind("click",showNav)
		.click(hideNav);
}

function hideNav () {
	$("nav")
		.removeClass("helloNav")
		.removeClass("helloBg");
	
	$("#boltIcon")
		.unbind("click",hideNav)
		.click(showNav);
}

function showWork () {

	var workletts = [
		"work/kinark.html",
		"work/sd.html",
		"work/drcisst.html",
		"work/hallo.html",
		"work/galt.html",
		"work/oea.html",
		"work/nemo.html",
		"work/hd.html",
		"work/to.html",
		"work/bhdc.html",
		"work/splat.html",
		"work/fishy.html",
		"work/bmet.html",
		"work/ibz.html"
	];
	var worker = $(this).attr("data-id");
	$("#workFrame").load(workletts[worker]);
	$("#closeBtn").click(hideWork);
	$("#closeBtn").removeClass("hiderSlo");
	$("#workFrame").removeClass("hiderSlo");
	$(".wrapz").addClass("workMover");
	$("nav").addClass("hider");
	
}

function hideWork () {
	$("#closeBtn").addClass("hiderSlo");
	$("#workFrame").addClass("hiderSlo");
	$(".wrapz").removeClass("workMover");
	$("nav").removeClass("hider");
}


function ihasSkills () {
	$(".skill10").css("width","95%");
	$(".skill9").css("width","90%");
	$(".skill8").css("width","80%");
	$(".skill7").css("width","70%");
	//$(".skill6").css("width","60%");
}


function initStuff () {

	$('#navMain').find('a').on('click', function() {
		var link = $(this).attr('href');
		$('#wrapz').animate({
			scrollTop: $(link).position().top
		}, 700);
	});

	$("#boltIcon").on('click',showNav);
	
	$(".workImg").on('click',showWork);
	
	$("#maily").mouseover(
		function() {
			$("footer h2").text("Email");
		}
	);
	
	$("#codepen").mouseover(
		function() {
			$("footer h2").text("Pens");
		}
	);
	
	$("#linked").mouseover(
		function() {
			$("footer h2").text("Connect");
		}
	);
	
	$("#insta").mouseover(
		function() {
			$("footer h2").text("Follow");
		}
	);
	
	$("#insta, #codepen, #linked").mouseout(
		function() {
			$("footer h2").text("Say hello");
		}
	);
}


$('#wrapz').scroll(function() {
	var pos = $(this).scrollTop();

	if ( $('#about').offset().top < 200 ) {
		ihasSkills();
	} else {
		$('.aboutSkillFill').css('width', 0);
	}

	if ( $('#me').offset().top > 0 ) {
		$(".headPatt1").css("left", 53 + (pos / 2) + "%");
		$(".headPatt2").css("left", 0 - (pos / 2) + "%");
		$(".nameGreen").css({
			"top": 325 + (pos / 2) + "px",
			"opacity": 1 - (pos / 50)
		});
	}
});

$(document).ready(initStuff);
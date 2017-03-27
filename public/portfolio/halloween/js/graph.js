/*
	This contains graph information. The main and static components of the graph are loaded
	into an a frame. The bars are animated using velocity depending on which button is 
	clicked on. The tool tips only appear on the main graph using hovers. 
	
	NOTE - graph does not appear on Firefox
*/


function loadGraph () {

	// loads graph svg into iframe
	$("#SVGgraph").attr("src","graph.svg");
	
	// shows total expenditure graph 
	showAllGraph();
	
	// when overlay is closed, reset graph to total expenditures 
	$("#graphClose").click(showAllGraph);
}


// shows main graph of total expenditures 
function showAllGraph () {

	// on mouseover, show tooltips and changes colour of bar
	$(".graphBar").mouseover(
		function() {
			// selects the next tooltip containing class name graphTT
			$(this).next(".graphTT").css("display","block");
			$(this).css("fill","#F4844C");
		}
	);
	
	// on mouseout, hides tooltips and changes colour back to default
	$(".graphBar").mouseout(
		function() {
			// selects the next tooltip containing class name graphTT
			$(this).next(".graphTT").css("display","none");
			$(this).css("fill","#EF5000");
		}
	);
	
	// unbinds click from shown graph, binds clicks to rest
	$("#gphBtnAll").unbind("click");
	$("#gphBtnCan").click(showCandy);
	$("#gphBtnCos").click(showCostume);
	$("#gphBtnDec").click(showDecor);

	// changes colour of selected circle
	// changes colours of other circles to be default colour
	$("#gphAllCir").css("fill","#F4844D");
	$("#gphCanCir").css("fill","#EF5000");
	$("#gphCosCir").css("fill","#EF5000");
	$("#gphDecCir").css("fill","#EF5000");

	// changes title of graph by changing html of div
	$("#graphTitle").html("Total Annual Halloween Expenditure");
	
	$("#graph2005").velocity(
		{ 
			y: 622,
			height: 215 
		}
	);
	
	$("#graph2006").velocity(
		{ 
			y: 517,
			height: 320 
		}
	);
	
	$("#graph2007").velocity(
		{ 
			y: 506,
			height: 331 
		}
	);
	
	$("#graph2008").velocity(
		{ 
			y: 465,
			height: 372 
		}
	);
	
	$("#graph2009").velocity(
		{ 
			y: 527,
			height: 310 
		}
	);
	
	$("#graph2010").velocity(
		{ 
			y: 460,
			height: 377 
		}
	);
	
	$("#graph2011").velocity(
		{ 
			y: 392,
			height: 445 
		}
	);
	
	$("#graph2012").velocity(
		{ 
			y: 324,
			height: 513 
		}
	);
	
	$("#graph2013").velocity(
		{ 
			y: 387,
			height: 450 
		}
	);
	
	$("#graph2014").velocity(
		{ 
			y: 360,
			height: 477 
		}
	);
	
}

// shows graph of candy expenditures 
function showCandy () {

	$(".graphBar").unbind("mouseover");
	
	$("#gphBtnAll").click(showAllGraph);
	$("#gphBtnCan").unbind("click");
	$("#gphBtnCos").click(showCostume);
	$("#gphBtnDec").click(showDecor);

	// changes colour of selected circle
	// changes colours of other circles to be default colour
	$("#gphAllCir").css("fill","#EF5000");
	$("#gphCanCir").css("fill","#F4844D");
	$("#gphCosCir").css("fill","#EF5000");
	$("#gphDecCir").css("fill","#EF5000");

	// changes title of graph by changing html of div
	$("#graphTitle").html("Annual Halloween Candy Expenditure");
	
	$("#graph2005").velocity(
		{ 
			y: 764,
			height: 73 
		}
	);
	
	$("#graph2006").velocity(
		{ 
			y: 736,
			height: 101 
		}
	);
	
	$("#graph2007").velocity(
		{ 
			y: 738,
			height: 99 
		}
	);
	
	$("#graph2008").velocity(
		{ 
			y: 724,
			height: 113 
		}
	);
	
	$("#graph2009").velocity(
		{ 
			y: 739,
			height: 98 
		}
	);
	
	$("#graph2010").velocity(
		{ 
			y: 726,
			height: 111 
		}
	);
	
	$("#graph2011").velocity(
		{ 
			y: 709,
			height: 128 
		}
	);
	
	$("#graph2012").velocity(
		{ 
			y: 689,
			height: 148 
		}
	);
	
	$("#graph2013").velocity(
		{ 
			y: 704,
			height: 133 
		}
	);
	
	$("#graph2014").velocity(
		{ 
			y: 695,
			height: 142 
		}
	);

}

// shows graph of costume expenditures 
function showCostume () {

	$(".graphBar").unbind("mouseover");
	
	$("#gphBtnAll").click(showAllGraph);
	$("#gphBtnCan").click(showCandy);
	$("#gphBtnCos").unbind("click");
	$("#gphBtnDec").click(showDecor);

	// changes colour of selected circle
	// changes colours of other circles to be default colour
	$("#gphAllCir").css("fill","#EF5000");
	$("#gphCanCir").css("fill","#EF5000");
	$("#gphCosCir").css("fill","#F4844D");
	$("#gphDecCir").css("fill","#EF5000");
	
	// changes title of graph by changing html of div
	$("#graphTitle").html("Annual Halloween Costume Expenditure");
	
	$("#graph2005").velocity(
		{ 
			y: 765,
			height: 72 
		}
	);
	
	$("#graph2006").velocity(
		{ 
			y: 722,
			height: 115 
		}
	);
	
	$("#graph2007").velocity(
		{ 
			y: 722,
			height: 115 
		}
	);
	
	$("#graph2008").velocity(
		{ 
			y: 704,
			height: 133 
		}
	);
	
	$("#graph2009").velocity(
		{ 
			y: 726,
			height: 111 
		}
	);
	
	$("#graph2010").velocity(
		{ 
			y: 709,
			height: 128 
		}
	);
	
	$("#graph2011").velocity(
		{ 
			y: 677,
			height: 160 
		}
	);
	
	$("#graph2012").velocity(
		{ 
			y: 655,
			height: 182 
		}
	);
	
	$("#graph2013").velocity(
		{ 
			y: 672,
			height: 165 
		}
	);
	
	$("#graph2014").velocity(
		{ 
			y: 659,
			height: 178 
		}
	);
}

// shows graph of decoration expenditures 
function showDecor () {

	$(".graphBar").unbind("mouseover");
	
	$("#gphBtnAll").click(showAllGraph);
	$("#gphBtnCan").click(showCandy);
	$("#gphBtnCos").click(showCostume);
	$("#gphBtnDec").unbind("click");

	// changes colour of selected circle
	// changes colours of other circles to be default colour
	$("#gphAllCir").css("fill","#EF5000");
	$("#gphCanCir").css("fill","#EF5000");
	$("#gphCosCir").css("fill","#EF5000");
	$("#gphDecCir").css("fill","#F4844D");
	
	// changes title of graph by changing html of div
	$("#graphTitle").html("Annual Halloween Decoration Expenditure");
	
	$("#graph2005").velocity(
		{ 
			y: 784,
			height: 54 
		}
	);
	
	$("#graph2006").velocity(
		{ 
			y: 754,
			height: 84 
		}
	);
	
	$("#graph2007").velocity(
		{ 
			y: 749,
			height: 89 
		}
	);
	
	$("#graph2008").velocity(
		{ 
			y: 738,
			height: 100 
		}
	);
	
	$("#graph2009").velocity(
		{ 
			y: 758,
			height: 80 
		}
	);
	
	$("#graph2010").velocity(
		{ 
			y: 734,
			height: 104 
		}
	);
	
	$("#graph2011").velocity(
		{ 
			y: 718,
			height: 120 
		}
	);
	
	$("#graph2012").velocity(
		{ 
			y: 687,
			height: 151 
		}
	);
	
	$("#graph2013").velocity(
		{ 
			y: 713,
			height: 125 
		}
	);
	
	$("#graph2014").velocity(
		{ 
			y: 709,
			height: 129 
		}
	);

}


// starts function after document loads
$(document).ready(loadGraph);
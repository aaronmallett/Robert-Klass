var DOWN_ARROW_SIZE = 50;

$(document).ready(function(){

	$(".full-page-panel").height($(window).height());

	// call helper functions to vertically align content
	// in each panel
	setSpacerDiv1();

	//setSpacerDiv2();

	//setSpacerDiv3();

	//setSpacerDiv4();
	termsHeight1();

});

$(window).resize(function(){

	$(".full-page-panel").height($(window).height());

	// call helper functions to vertically align content
	// in each panel
	setSpacerDiv1();

	setSpacerDiv2();

	//setSpacerDiv3();

	//setSpacerDiv4();
	termsHeight1();

});

/*
 calculating the height of each panel's spacer
 div so that the elements are roughly centered
 values are obtained by adding the height of all elements
 in that panel
*/
function setSpacerDiv1(){
	// ele heights
	// 218
	// 32
	// 149
	// 140
	var contentHeight = $('.panel2-content').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer1").height(emptySpace/2);
}

function setSpacerDiv2(){
	var contentHeight = $('#panel3-content').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer2").height(emptySpace/2);
}

function setSpacerDiv3(){
	var contentHeight = $('#boxText').outerHeight(true) + $('div.form').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer3").height(emptySpace/2);
}

function setSpacerDiv4(){
	var contentHeight = $('#rightColumn').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer4").height(emptySpace/2);
}

function termsHeight1(){

	var footerText = $('#footer-text').outerHeight(true);

	$("#terms").height(footerText + 50);


}

$(window).resize(function(){

	var footerText = $('#footer-text').outerHeight(true);

	if ($(window).width() <= 575){	

		$("#terms").height(footerText + 80);
	}	
});


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	// $('#fancy-panel').css({
	// 	'transform' : 'translate(0px,'+ wScroll /-15 +'%)'
	// });

	// $('.fancy-content').css({
	// 	'transform' : 'translate(0px,'+ wScroll /5 +'%)'
	// });

	// $('#fancy-panel-2').css({
	// 		'transform' : 'translate(0px,'+ wScroll /-10 +'%)'
	// });
});






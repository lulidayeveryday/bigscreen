//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();
var autoSlider;

function slide(){
	pos = 0;
	totalSlides = $('#slider li').length;
//get the slide width
	var a=$('#slider li').length;
	clearInterval(autoSlider);
	if(a<2){
		$("#next").css('display','none');
		$("#pagination-wrap").css('display','none');
		$("#previous").css('display','none');
	}else {
		$("#next").css('display','block');
		$("#pagination-wrap").css('display','block');
		$("#previous").css('display','block');
	}
	/*****************
	 BUILD THE SLIDER
	 *****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

	//next slide
	$('#next').click(function(){
		slideRight();
	});

	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});



	/*************************
	 //*> OPTIONAL SETTINGS
	 ************************/
		//automatic slider
	autoSlider = setInterval(slideRight, 3000);

	//for each slide
	$('#pagination-wrap ul').html('');
	$.each($('#slider-wrap ul li'), function() {
		//set its color
		var c = $(this).attr("data-color");
		$(this).css("background",c);

		//create a pagination
		var li = document.createElement('li');
		$('#pagination-wrap ul').append(li);
	});

	//counter
	countSlides();

	//pagination
	pagination();

	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
		function(){ $(this).addClass('active'); clearInterval(autoSlider); },
		function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
}


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
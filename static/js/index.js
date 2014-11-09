
function slide(){
	var intervalID = setInterval("$('.slider_next').click()", 4000);
}

slide();


function scrollTo(anchor, offset){
	$('html, body').animate({
	 scrollTop: $(anchor).offset().top - offset
	}, 500);
}

$(function() {  
  $(".form-submit").click(function() {  

  	event.preventDefault();
    var dataString = $(".form").serialize();
    $.post('/mail',dataString,function(){
    	alert('Сообщение отправлено');
		$('.form-input').val('');
	});

  });
	
})




$(document).ready(function(){

	var hash = window.location.hash;

	if(hash){

		switch (hash) {

  			case "#parts":
		 	scrollTo('#menu1', 80);

		 break

  	     	case "#howwework":
			 scrollTo(".how_we_work", 80);

   		 break

  			case "#contacts":
			 scrollTo(".contacts_down", 60);

   		 break

   		   	case "#offer":
			 scrollTo(".special-offer", 60);

   		 break

		}

	}

	$(document).scroll(function(){

		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(scrollTop > 60) {
			$('.up').show();
		}
		else {
		 $('.up').hide();
		}


		if(scrollTop > 400) {
			$(".arrows").show('drop');
		}
		else $(".arrows").hide();


	})

	$(".logo_text").click(function() {
    	 $('html, body').animate({
        	 scrollTop: 0
     	}, 500);
	 });


	$(".up").click(function() {
    	 $('html, body').animate({
        	 scrollTop: 0
     	}, 500);
	 });


	$(".menu1").click(function() {
		 window.location.hash = 'parts';
		 scrollTo('#menu1', 80);
	 });

	$(".menu2").click(function() {
		 window.location.hash = 'howwework';
		 scrollTo(".how_we_work", 80);
	 });

	$(".menu3").click(function() {
		 window.location.hash = 'contacts';
		 scrollTo(".contacts_down", 60);
	 });

	$(".menu4").click(function() {
		 window.location.hash = 'offer';
		 scrollTo(".special-offer", 60);
	 });

	var fx = "drop";

	$(".slide2").hide();
	$(".slide3").hide();
	$('.arrows').hide();
	$('.up').hide();


	
    $(".slide1_dot").click(function(){
		$(".ul-slides > *").hide(fx);
		$(".slide1").show(fx);




    });

    $(".slide2_dot").click(function(){
		$(".ul-slides > *").hide(fx);
		$(".slide2").show(fx);

    });

    $(".slide3_dot").click(function(){
  		$(".ul-slides > *").hide(fx);
		$(".slide3").show(fx);

    });

    $(".slider_previous").click(function(){

		var visible_slide = $(".ul-slides li:visible").attr('class');
		var previous_slide;
		var previous_dot;
		switch (visible_slide) {

  			case "slide1":
		previous_slide = ".slide3";
		previous_dot = ".slide3_dot";

		 break

  	     	case "slide2":
		previous_slide = ".slide1";
		previous_dot = ".slide1_dot";

   		 break

  			case "slide3":
		previous_slide = ".slide2";
		previous_dot = ".slide2_dot";

   		 break

		}

		$(".ul-slides > *").hide(fx);
		$(previous_slide).show(fx);	

		$(previous_dot + " input").prop('checked', true);



	});

    $(".slider_next").click(function(){

		var visible_slide = $(".ul-slides li:visible").attr('class');
		var next_slide;
		var next_dot;
		switch (visible_slide) {

  			case "slide1":
		next_slide = ".slide2";
		next_dot = ".slide2_dot";
		 break

  	     	case "slide2":
		next_slide = ".slide3";
		next_dot = ".slide3_dot";

   		 break

  			case "slide3":
		next_slide = ".slide1";
		next_dot = ".slide1_dot";
   		 break

  // 			case "slide4":
		// next_slide = ".slide1";
		// next_dot = ".slide1_dot";
  //  		 break   		 
  	
		}

		$(".ul-slides > *").hide(fx);
		$(next_slide).show(fx);
		$(next_dot + " input").prop('checked', true);

    });


});
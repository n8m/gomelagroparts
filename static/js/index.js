
function slide(){
	var intervalID = setInterval("$('.slider_next').click()", 4000);
}

slide();




$(function() {  
  $(".form-submit").click(function() {  

  	event.preventDefault();
    var dataString = $(".form").serialize();
    $.post('/mail',dataString,function(){
    	alert('Сообщение отправлено');
		$('.form').find('input').val('');
		$('.form').find('textarea').val('Ваше сообщение');
	});

  });
	
})




$(document).ready(function(){



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
    	 $('html, body').animate({
        	 scrollTop: $("#menu1").offset().top - 80
     	}, 500);
	 });

	$(".menu2").click(function() {
    	 $('html, body').animate({
        	 scrollTop: $(".how_we_work").offset().top - 80
     	}, 500);
	 });

	$(".menu3").click(function() {
    	 $('html, body').animate({
        	 scrollTop: $(".contacts_down").offset().top - 60
     	}, 500);
	 });

	var fx = "drop";

	$(".slide2").hide();
	$(".slide3").hide();
	// $(".slide4").hide(fx);
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

  //   $(".slide4_dot").click(function(){
  //  		$(".slides > *").hide(fx);
		// $(".slide4").show(fx);

  //   });

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

  // 			case "slide4":
		// previous_slide = ".slide3";
		// previous_dot = ".slide3_dot";

  //  		 break   		 
  	
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
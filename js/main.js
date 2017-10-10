$("document").ready(function(){

	function imgFadeIn(){
		$(".intro-img img#active").animate({
			"left" : 0,
			"opacity" : 1
		}, 1000, "easeInOutExpo");
	}

	imgFadeIn();

	//Slider

	function nextSlide(counter){

		var images = ["mobile.png", "ipad.png", "code.png"];

		// Leave
		$("#active").animate({
			"left" : 250,
			"opacity" : 0
		}, 1000, "easeInOutExpo", function(){
			$("#active").css({
				"left" : -200,
				"opacity" : 0
			});
			//Change Img
			$("#active").attr("src", "images/" + images[counter]);

			//Enter
			$("#active").animate({
				"left" : 0,
				"opacity" : 1
			}, 1000, "easeInOutExpo");
		});
	};
	var counter = -1;
	window.setInterval(function() {
		if (counter == 2){
			counter = -1;
		}
		counter++;
		console.log(counter);
		nextSlide(counter);
	}, 4000);



	//End slider

	$(".main-intro h1").animate({
		"right" : 0,
		"opacity" : 1
	}, 1000, "easeInOutExpo");
	setTimeout(function() { 
    	$(".main-intro p").animate({
			"right" : 0,
			"opacity" : 1
		}, 1000, "easeInOutExpo");
	}, 200);
	setTimeout(function() { 
    	$(".main-intro button").animate({
			"right" : 0,
			"opacity" : 1
		}, 1000, "easeInOutExpo");
	}, 400);

	$(".benefit").hover(function(){
		$(this).find("h2 span").css({
			"width" : "100%"
		});
		$(this).find(".ben-content i").css({
			"top" : "-10px",

		});
	}, function(){
		$(this).find("h2 span").css({
			"width" : "0"
		});
		$(this).find(".ben-content i").css({
			"top" : "0",

		});
	});

	$(".pic-frame").each(function(){
		var width = $(this).width();
		$(this).height(width);
	});


    $('#side-nav').find('a').on('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 91
        }, 400,'easeInOutExpo', function(){
        	closeNav();
        });
        event.preventDefault();
    });

});

$(window).resize(function(){
	if ($(window).width() < 992) {
		$("#hamburger").attr("onclick", "openMobile()");
		$(".closebtn").attr("onclick", "closeMobile()");
	} else {
		$("#hamburger").attr("onclick", "openNav()");
		$(".closebtn").attr("onclick", "closeNav()");
	}
	$(".pic-frame").each(function(){
		var width = $(this).width();
		$(this).height(width);
	});
});


if ($(window).width() < 992) {
	$("#hamburger").attr("onclick", "openMobile()");
	$(".closebtn").attr("onclick", "closeMobile()");
}

function openMobile(){
	$("#side-nav").animate({
		"width" : 250
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "closeMobile()");

	$("#nav").animate({
		"left" : -300
	}, 250, "easeInOutExpo");
}

function closeMobile(){
	$("#side-nav").animate({
		"width" : 0
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "openMobile()");

	$("#nav").animate({
		"left" : 0
	}, 250, "easeInOutExpo");
}

function openNav() {
    $("#side-nav").animate({
		"width" : 300
	}, 250, "easeInOutExpo");

	$("#nav").animate({
		"left" : -300
	}, 250, "easeInOutExpo");

   $("#all-content").animate({
		"left" : -300
	}, 250, "easeInOutExpo");
   $("#hamburger").attr("onclick", "closeNav()");


}

function closeNav() {
	$("#side-nav").animate({
		"width" : 0
	}, 250, "easeInOutExpo");

	$("#nav").animate({
		"left" : 0
	}, 250, "easeInOutExpo");

   $("#all-content").animate({
		"left" : 0
	}, 250, "easeInOutExpo");
   $("#hamburger").attr("onclick", "openNav()");

   $(".pic-frame").each(function(){
		var width = $(this).width();
		$(this).height(width);
	});
}




$(window).scroll(function(){


		var scrollTop = $(this).scrollTop();


		if(scrollTop == 0){
			$('#nav').removeClass('white');
		}

		if(scrollTop >= 100){
			$('#nav').addClass('white');
		}



	});

$("document").ready(function() {
		
	//Custom slider	
	function imgFadeIn() {
		$(".intro-img img#active").animate({
			"left": 0,
			"opacity": 1
		}, 1000, "easeInOutExpo");
	}

	imgFadeIn();

	function nextSlide(counter) {
		//Store image file names in array
		var images = ["mobile.png", "ipad.png", "code.png"];
		// Leave
		$("#active").animate({
			"left": 250,
			"opacity": 0
		}, 1000, "easeInOutExpo", function() {
			$("#active").css({
				"left": -200,
				"opacity": 0
			});
			//Change Img
			$("#active").attr("src", "images/" + images[counter]);
			//Enter
			$("#active").animate({
				"left": 0,
				"opacity": 1
			}, 1000, "easeInOutExpo");
		});
	};

	var counter = -1;
	window.setInterval(function() {
		if (counter == 2) {
			counter = -1;
		}
		counter++;
		console.log(counter);
		nextSlide(counter);
	}, 4000);

	//End slider

	//On page load, animate top section elements
	$(".main-intro h1").animate({
		"right": 0,
		"opacity": 1
	}, 1000, "easeInOutExpo");
	setTimeout(function() {
		$(".main-intro p").animate({
			"right": 0,
			"opacity": 1
		}, 1000, "easeInOutExpo");
	}, 200);
	setTimeout(function() {
		$(".main-intro button").animate({
			"right": 0,
			"opacity": 1
		}, 1000, "easeInOutExpo");
	}, 400);

	//Animate bottom border for boxes
	$(".benefit").hover(function() {
		$(this).find("h2 span").css({
			"width": "100%"
		});
		$(this).find(".ben-content i").css({
			"top": "-10px",
		});
	}, function() {
		$(this).find("h2 span").css({
			"width": "0"
		});
		$(this).find(".ben-content i").css({
			"top": "0",
		});
	});

	//Set with = height of team photos on page load for responsive circles
	$(".pic-frame").each(function() {
		var width = $(this).width();
		$(this).height(width);
	});

	//Side navigation anchor animate, then close nav
	$('#side-nav').find('a').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 91
		}, 400, 'easeInOutExpo', function() {
			closeNav();
		});
		event.preventDefault();
	});
});

//Assign correct nav for screen size, when resizing
$(window).resize(function() {
	if ($(window).width() < 992) {
		$("#hamburger").attr("onclick", "openMobile()");
		$(".closebtn").attr("onclick", "closeMobile()");
	} else {
		$("#hamburger").attr("onclick", "openNav()");
		$(".closebtn").attr("onclick", "closeNav()");
	}
	//Responsive team photos
	$(".pic-frame").each(function() {
		var width = $(this).width();
		$(this).height(width);
	});
});

//Assign correct nav for screen size
if ($(window).width() < 992) {
	$("#hamburger").attr("onclick", "openMobile()");
	$(".closebtn").attr("onclick", "closeMobile()");
}

function openMobile() {
	$("#side-nav").animate({
		"width": 250
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "closeMobile()");
	$("#nav").animate({
		"left": -250
	}, 250, "easeInOutExpo");
}

function closeMobile() {
	$("#side-nav").animate({
		"width": 0
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "openMobile()");
	$("#nav").animate({
		"left": 0
	}, 250, "easeInOutExpo");
}

function openNav() {
	$("#side-nav").animate({
		"width": 300
	}, 250, "easeInOutExpo");
	$("#nav").animate({
		"left": -300
	}, 250, "easeInOutExpo");
	$("#all-content").animate({
		"left": -300
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "closeNav()");
}

function closeNav() {
	$("#side-nav").animate({
		"width": 0
	}, 250, "easeInOutExpo");
	$("#nav").animate({
		"left": 0
	}, 250, "easeInOutExpo");
	$("#all-content").animate({
		"left": 0
	}, 250, "easeInOutExpo");
	$("#hamburger").attr("onclick", "openNav()");
	$(".pic-frame").each(function() {
		var width = $(this).width();
		$(this).height(width);
	});
}
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	if (scrollTop == 0) {
		$('#nav').removeClass('white');
	}
	if (scrollTop >= 100) {
		$('#nav').addClass('white');
	}
});
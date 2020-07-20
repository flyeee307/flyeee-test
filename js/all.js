$(document).ready(function(){



	// UI Scroll 上下捲動，控制 Header 的消失與顯示
	// var lastScrollY = 0;

	// $(window).scroll(function(event) {
		
	// 	var st = this.scrollY;

	// 	if (st < lastScrollY) {
	// 		$('.main-header').removeClass('hideUp');
	// 	} else {
	// 		$('.main-header').addClass('hideUp');
	// 	}
	// 	lastScrollY = st;
	// });



	

	function headerHide() {
		
		var lastScrollY = 0;

		$(window).scroll(function(event) {

			var st = this.scrollY;

			if (st < lastScrollY || lastScrollY < 0) {
				$('.main-header').removeClass('hideUp');
			} else {
				$('.main-header').addClass('hideUp');
			}
			lastScrollY = st;
		});	
	}

	if($(window).innerWidth() > 375) {
		headerHide();
	}

	$(window).resize(function() {
		// console.log($(window).innerWidth());
		if($(window).innerWidth() > 375) {
			headerHide();
		}
	});

	


	// 大頭照的視差滾動
	function myFixed768() {
		$(window).scroll(function() {
			var i = $('.about__portrait.myFixed').offset().top;
			var j = $(window).scrollTop();
			var m = $('.about__portrait.myFixed').css('margin-top');
			console.log(i);
			console.log(j);
			if (j > 780 && j < 800) {
				
				$('.about__portrait.myFixed').stop().animate({
					'margin-top': (40+j-780)+'px'
				}, 400, "linear");
			}
		});
	}

	function myFixed1280() {
		$(window).scroll(function() {
			var i = $('.about__portrait.myFixed').offset().top;
			var j = $(window).scrollTop();
			var m = $('.about__portrait.myFixed').css('margin-top');
			console.log(i);
			console.log(j);
			if (j > 440 && j < 605) {
				
				$('.about__portrait.myFixed').stop().animate({
					'margin-top': (40+j-440)+'px'
				}, 400, "linear");
			}
		});
	}

	function myFixedResize() {
		$(window).resize(function() {
			$('.about__portrait').removeClass('u-mt-40');

			if($(window).width() >= 1280 && $(window).width() < 1920) {
				
				$('.about__portrait').css('margin-top', '40px !important');
				$('.about__portrait').addClass('myFixed');
				myFixed1280();
			} else if($(window).width() >= 768 && $(window).width() < 1280) {
				
				$('.about__portrait').css('margin-top', '40px !important');
				$('.about__portrait').addClass('myFixed');
				myFixed768();
			} else {
				$('.about__portrait').removeClass('myFixed');
				$('.about__portrait').addClass('u-mt-40');
			}
		});
	}



	if($(window).width() >= 1280 && $(window).width() < 1920) {
		$('.about__portrait').addClass('myFixed');
		myFixed1280();
		myFixedResize();
	} else if($(window).width() >= 768 && $(window).width() < 1280) {
		$('.about__portrait').addClass('myFixed');
		myFixed768();
		myFixedResize();
	} 

	myFixedResize();
	

	


	

	


	// 視差滾動
	// $('.shape-line-a').stellar();
	// $(window).stellar();

	// $.stellar({
	//   horizontalOffset: 40,
	//   verticalOffset: 150
	// });

	



	
	

	
	


	

	
	
	
	


	

	/*go top*/
	// // hide #back-top first
	// $(".back-top").hide();
	
	// // fade in .back-top
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 100) {
	// 		$('.back-top').fadeIn('100');
	// 	} else {
	// 		$('.back-top').fadeOut('100');
	// 	}
	// });

	// // scroll body to 0px on click
	// $('.back-top').click(function (bt) {
	// 	bt.preventDefault();
	// 	$('body,html').animate({
	// 		scrollTop: 0
	// 	}, 800);
	// });


	/* go top進階寫法 */
	// hide #back-top first
	$(".back-top").hide();


    $(window).scroll(function(){
		var pos = $(window).scrollTop();

		if (pos > 300 && pos < 7500) {
			$('.back-top').stop().fadeIn(400);
		}else{
			$('.back-top').stop().fadeOut(200);
		}
	});
	
    $(".back-top").click(function(e){
    	e.preventDefault();
        $("html,body").stop().animate({scrollTop:0},500);	
    });
    







	// 點選按鈕跳到該部位
	$('.main-hero__content .btn').click(function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $('.about-content').offset().top-30
		}, 800);
	});

	// 點選nav選單跳到該部位
	$('#home').click(function (event) {
		event.preventDefault();
		$('.portfolio-content').removeClass('show');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});

	$('#about').click(function (event) {
		event.preventDefault();
		$('.portfolio-content').removeClass('show');
		$('body,html').animate({
			scrollTop: $('.about-content').offset().top-30
		}, 800);
	});

	$('#works').click(function (event) {
		event.preventDefault();
		$('.portfolio-content').removeClass('show');
		$('body,html').animate({
			scrollTop: $('.works-content').offset().top-40
		}, 800);
	});

	$('#contact').click(function (event) {
		event.preventDefault();
		$('.portfolio-content').removeClass('show');
		$('body,html').animate({
			scrollTop: $('.contact-content').offset().top-40
		}, 800);
	});


	// 點選popup-menu__item跳到該部位
	$('.popup-about').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.about-content').offset().top-30
		}, 800);
	});

	$('.popup-skills').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.skills-content').offset().top-30
		}, 800);
	});

	$('.popup-experience').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.experience-content').offset().top-30
		}, 800);
	});

	$('.popup-works').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.works-content').offset().top-30
		}, 800);
	});

	$('.popup-contact').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.contact-content').offset().top-30
		}, 800);
	});

	$('.menu-toggler').click(function(event){
		event.preventDefault();
		$('.popup-menu').addClass('show');
	});

	$('.popup-menu--close').click(function(event){
		event.preventDefault();
		$('.popup-menu').removeClass('show');
	});



	// 點選 更多作品 展開作品集
	$('.works-group .btn').click(function(event) {
		event.preventDefault();
		$('.portfolio-content').addClass('show');
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		// $('.footer').addClass('z-top');
		// $('.footer__logo').hide(100);
	});



	
	// 圖片輪播初始化
	$(".owl-carousel").owlCarousel();

		$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	});
	


	

	// Isotope 圖片篩選插件
	// $('.grid').isotope({
	//   itemSelector: '.grid-item',
	//   percentPosition: true,
	//   masonry: {
	//     // use outer width of grid-sizer for columnWidth
	//     columnWidth: '.grid-sizer',
	// 	// columnWidth: 100,
	//     // horizontalOrder: true,
	//     fitWidth: true
	//   }
	// });

	$('.button-group .btn').click(function() {
		$(this).addClass('is-active');
		$(this).siblings().removeClass('is-active');

	});


	$('.jq-sqare-grid').scroll(function(){
		var sleft = $('.jq-sqare-grid').scrollLeft();
		console.log(sleft);
	});

	$('.btn.first').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: 0
		}, 200, 'swing');
	});

	$('.btn.prev').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: $('.jq-sqare-grid').scrollLeft()-330
		}, 200, 'swing');
	});

	$('.btn.next').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: $('.jq-sqare-grid').scrollLeft()+330
		}, 200, 'swing');
	});

	$('.btn.last').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: $('.jq-sqare-grid').scrollLeft()+2380
		}, 200, 'swing');
	});
	

	// RWD顯示設定

	function windowSize() {
	    if ($(window).width() < 576) {
	        $('.jq-sqare-grid').show();
	        $('.jq-grid').hide();
	        // 正方形縮圖排版
			var $gridS = $('.jq-sqare-grid').isotope({
			  itemSelector: '.sqare-grid-item',
			  layoutMode: 'masonryHorizontal',
			  masonryHorizontal: {
			    // columnWidth: '.sqare-grid-item',
			    rowHeight: 100,
				gutter: 10
			  }
			});

			// $gridS.on( 'click', '.grid-item-content', function() {
			//   $( this ).parent('.sqare-grid-item').toggleClass('is-expanded');
			//   $gridS.isotope('layout');
			// });

			// layout Isotope after each image loads
			$gridS.imagesLoaded().progress( function() {
			  $gridS.isotope('layout');
			});

			// filter items on button click
			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $gridS.isotope({ filter: filterValue });
			});
	    } else {
	        $('.jq-sqare-grid').hide();
	        $('.jq-grid').show();
	        // init Isotope
			var $gridL = $('.jq-grid').isotope({
			  // options
			  itemSelector: '.grid-item',
			  layoutMode: 'masonry',
			  percentPosition: true,
			  // layout mode options
			  masonry: {
			    columnWidth: '.grid-sizer'
			  }
			});
			// layout Isotope after each image loads
			$gridL.imagesLoaded().progress( function() {
			  $gridL.isotope('layout');
			});
			// filter items on button click
			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $gridL.isotope({ filter: filterValue });
			});
	    }
	}
	$(window).resize(function() {
	    windowSize();
	});
	windowSize();



	// fancybox 設定
	$('[data-fancybox="gallery"]').fancybox({
		thumbs : {
			autoStart : true
		}
	});

	$('[data-fancybox="images"]').fancybox({
	    afterLoad : function(instance, current) {
	        var pixelRatio = window.devicePixelRatio || 1;

	        if ( pixelRatio > 1.5 ) {
	            current.width  = current.width  / pixelRatio;
	            current.height = current.height / pixelRatio;
	        }
	    }
	});

	$('[data-fancybox]').fancybox({
		protect: true
	});

	// // Check if current image dimensions are smaller than actual
	// instance.isScaledDown();

	// // Scale image to the actual size of the image
	// instance.scaleToActual( x, y, duration );

	// // Check if image dimensions exceed parent element
	// instance.canPan();

	// // Scale image to fit inside parent element
	// instance.scaleToFit( duration );


	// hover圖片時其他隱藏
	// $('.grid-item').hover(function() {
	// 	$(this).siblings().stop().fadeOut('400');
	// 	}, function() {
	// 	$(this).siblings().stop().fadeIn('400');
	// });




	
		

});



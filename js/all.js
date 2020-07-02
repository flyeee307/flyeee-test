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

			if (st < lastScrollY) {
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
		
		if($(window).innerWidth()<=1440){
			if (pos > 200) {
				$('.back-top').show(200);
			}else{
				$('.back-top').hide(200);
			}
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
		$('.footer').addClass('z-top');
		$('.footer__logo').hide(100);
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



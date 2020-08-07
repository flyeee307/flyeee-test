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




	// console.log($(window).height());
	// console.log($(window).innerHeight());
	



	// Header 隱藏

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




	// 背景的垂直視差滾動
	// $(window).scroll(function() { 
	//     var wScroll = $(this).scrollTop();
	//     var slowScroll =  wScroll / 10000 + 60;

	//     $('.color-mask').css({ 
	//      'transform' : 'translate(0px, '+ slowScroll +'px) scale(1.1)' 
	//     }); 

 //    }); 

    // $(window).scroll(function() { 
	   //  var wScroll = $(this).scrollTop();
	   //  var slowScroll =  wScroll / 50;

	   //  $('.color-mask').css({ 
	   //   'background-position' : 'center '+ slowScroll +'px'
	   //  }); 

    // }); 


	// // 大頭照的視差滾動
	// function myFixed768() {
	// 	$(window).scroll(function() {
	// 		var i = $('.about__portrait.myFixed').offset().top;
	// 		var j = $(window).scrollTop();
	// 		var m = $('.about__portrait.myFixed').css('margin-top');
	// 		console.log(i);
	// 		console.log(j);
	// 		if (j > 220 && j < 680) {
				
	// 			$('.about__portrait.myFixed').stop().animate({
	// 				'margin-top': (40+j-220)+'px'
	// 			}, 0, "linear");
	// 		}
	// 	});
	// }

	// function myFixed800() {
	// 	$(window).scroll(function() {
	// 		var i = $('.about__portrait.myFixed').offset().top;
	// 		var j = $(window).scrollTop();
	// 		var m = $('.about__portrait.myFixed').css('margin-top');
	// 		console.log(i);
	// 		console.log(j);
	// 		if (j > 390 && j < 870) {
				
	// 			$('.about__portrait.myFixed').stop().animate({
	// 				'margin-top': (40+j-390)+'px'
	// 			}, 0, "linear");
	// 		}
	// 	});
	// }

	// function myFixed1024_768() {
	// 	$(window).scroll(function() {
	// 		var i = $('.about__portrait.myFixed').offset().top;
	// 		var j = $(window).scrollTop();
	// 		var m = $('.about__portrait.myFixed').css('margin-top');
	// 		console.log(i);
	// 		console.log(j);
	// 		if (j > 550 && j < 870) {
				
	// 			$('.about__portrait.myFixed').stop().animate({
	// 				'margin-top': (40+j-550)+'px'
	// 			}, 0, "linear");
	// 		}
	// 	});
	// }

	// function myFixed1024_1366() {
	// 	$(window).scroll(function() {
	// 		var i = $('.about__portrait.myFixed').offset().top;
	// 		var j = $(window).scrollTop();
	// 		var m = $('.about__portrait.myFixed').css('margin-top');
	// 		console.log(i);
	// 		console.log(j);
	// 		if (j > 624 && j < 970) {
				
	// 			$('.about__portrait.myFixed').stop().animate({
	// 				'margin-top': (40+j-624)+'px'
	// 			}, 0, "linear");
	// 		}
	// 	});
	// }

	// function myFixed1280() {
	// 	$(window).scroll(function() {
	// 		var i = $('.about__portrait.myFixed').offset().top;
	// 		var j = $(window).scrollTop();
	// 		var m = $('.about__portrait.myFixed').css('margin-top');
	// 		console.log(i);
	// 		console.log(j);
	// 		if (j > 590 && j < 768) {
				
	// 			$('.about__portrait.myFixed').stop().animate({
	// 				'margin-top': (40+j-590)+'px'
	// 			}, 0, "linear");
	// 		}
	// 	});
	// }

	// function myFixedResize() {
	// 	$(window).resize(function() {
	// 		$('.about__portrait').css('margin-top', '40px !important');

	// 		$('.about__portrait').removeClass('u-mt-40');

	// 		if($(window).width() >= 1280 && $(window).width() < 1920) {
				
	// 			$('.about__portrait').css('margin-top', '40px');
	// 			$('.about__portrait').addClass('myFixed');
	// 			myFixed1280();
	// 		} else {
	// 			if($(window).width() >= 768 && $(window).width() < 1280) {
	// 				// console.log($(window).width());
	// 				$('.about__portrait').css('margin-top', '80px');
	// 				$('.about__portrait').addClass('myFixed');
	// 				if ($(window).width() == 800 && $(window).height() == 414) {
	// 					myFixed800();
	// 				} else if ($(window).width() == 1024 && $(window).height() == 768) {
	// 					myFixed1024_768();
	// 				} else if ($(window).width() == 1024 && $(window).height() == 1366) {
	// 					myFixed1024_1366();
	// 				} else {
	// 					myFixed768();
	// 				}
	// 				myFixedResize();
	// 			} else {
	// 				$('.about__portrait').removeClass('myFixed');
	// 				$('.about__portrait').addClass('u-mt-40');
	// 				myFixedResize();
	// 			}
	// 		}
	// 	});
	// }



	// if($(window).width() >= 1280 && $(window).width() < 1920) {
	// 	$('.about__portrait').addClass('myFixed');
	// 	myFixed1280();
	// 	myFixedResize();
	// } else {
	// 	if($(window).width() >= 768 && $(window).width() < 1280) {
	// 		// console.log($(window).width());
	// 		$('.about__portrait').addClass('myFixed');
	// 		if ($(window).width() == 800 && $(window).height() == 414) {
	// 			myFixed800();
	// 			// myFixedResize();
	// 		} else if ($(window).width() == 1024 && $(window).height() == 768) {
	// 			myFixed1024_768();
	// 			// myFixedResize();
	// 		} else if ($(window).width() == 1024 && $(window).height() == 1366) {
	// 			myFixed1024_1366();
	// 			// myFixedResize();
	// 		} else {
	// 			myFixed768();
	// 			// myFixedResize();
	// 		}
	// 		myFixedResize();
	// 	} else {
	// 		myFixedResize();
	// 	}
	// }

	// // myFixedResize();
	

	


	

	


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
			$('.back-top').fadeOut(800);
		}
	});
	
    $(".back-top").click(function(e){
    	e.preventDefault();
        $("html,body").stop().animate({scrollTop:0},200, 'swing');	
    });
    


    // Bootstrap 滾動監聽
    $(document).ready(function(){
	  // Add scrollspy to <body>
	  $('body').scrollspy({target: ".main-nav", offset: 50});   

	  // Add smooth scrolling on all links inside the navbar
	  $("#myNavbar a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 400, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        // window.location.hash = hash;
	        // console.log(hash);
	      });
	    }  // End if
	  });
	});


	// 偵測各區的scroll位置
	console.log($(window).scrollTop());

	$(window).scroll(function(event) {
		var st = this.scrollY;
		// var offSet0 = $('html,body').offset().top;
		var offSet1 = $('.about-content').offset().top;
		var offSet2 = $('.skills-content').offset().top;
		var offSet3 = $('.experience-content').offset().top;
		var offSet4 = $('.works-content').offset().top;
		var offSet5 = $('.contact-content').offset().top;
		
		console.log(st);
		// console.log(offSet0);
		console.log(offSet1);
		console.log(offSet2);
		console.log(offSet3);
		console.log(offSet4);
		console.log(offSet5);

		if (st >= 0) {
			$('#home').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
			$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
			$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');
			
			if (st >= offSet1 - 70) {
				$('#about').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
				$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
				$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');
				
				if (st >= offSet2 - 70) {
					$('#skills').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
					$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
					$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');

					if (st >= offSet3 - 70) {
						$('#experience').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
						$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
						$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');

						if (st >= offSet4 - 290) {
							$('#works').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
							$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
							$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');
					
							if (st >= offSet5 - 500) {
								$('#contact').parent().addClass('active').removeClass('unactive').siblings().addClass('unactive').removeClass('active');
								$('.main-nav__menu-item.active').siblings().find('.main-nav__menu-item-link').addClass('change');
								$('.main-nav__menu-item.active').find('.main-nav__menu-item-link').removeClass('change');
							}
						}		
					}
				}
			}
		}
	});





	// 點選按鈕跳到該部位
	$('.main-hero__content .btn').click(function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $('.works-content').offset().top-10
		}, 800, 'swing');
	});

	// // 點選nav選單跳到該部位
	// $('#home').click(function (event) {
	// 	event.preventDefault();
	// 	$('.portfolio-content').removeClass('show');
	// 	$('body,html').animate({
	// 		scrollTop: 0
	// 	}, 400);
	// });

	// $('#about').click(function (event) {
	// 	event.preventDefault();
	// 	$('.portfolio-content').removeClass('show');
	// 	$('body,html').animate({
	// 		scrollTop: $('.about-content').offset().top-30
	// 	}, 400);
	// });

	// $('#works').click(function (event) {
	// 	event.preventDefault();
	// 	$('.portfolio-content').removeClass('show');
	// 	$('body,html').animate({
	// 		scrollTop: $('.works-content').offset().top-40
	// 	}, 400);
	// });

	// $('#contact').click(function (event) {
	// 	event.preventDefault();
	// 	$('.portfolio-content').removeClass('show');
	// 	$('body,html').animate({
	// 		scrollTop: $('.contact-content').offset().top-40
	// 	}, 400);
	// });


	// 點選popup-menu__item跳到該部位
	$('.popup-about').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.about-content').offset().top-30
		}, 400);
	});

	$('.popup-skills').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.skills-content').offset().top-30
		}, 400);
	});

	$('.popup-experience').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.experience-content').offset().top-30
		}, 400);
	});

	$('.popup-works').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.works-content').offset().top-30
		}, 400);
	});

	$('.popup-contact').click(function (event) {
		event.preventDefault();
		$('.popup-menu').removeClass('show');
		$('.portfolio-content').removeClass('show');
		$('.footer').removeClass('z-top');
		$('body,html').animate({
			scrollTop: $('.contact-content').offset().top-30
		}, 400);
	});





	// $('.menu-toggler').click(function(event){
	// 	event.preventDefault();
	// 	$('.popup-menu').addClass('show');
	// });

	// $('.popup-menu--close').click(function(event){
	// 	event.preventDefault();
	// 	$('.popup-menu').removeClass('show');
	// });







	$(".menu-toggler").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $('.popup-menu').addClass('show');
    });
    $(".menu-toggler").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    });
    document.onclick = function(){
        $('.popup-menu').removeClass('show');
    };




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




	// 點選skills-toggle展開skills文字
	$('.skills-toggle').on('click', function() {
		$(this).toggleClass('change');
		$(this).parent().toggleClass('change');
		$(this).parent().find('.card-text__description,.card-text__tool').slideToggle(200);
	});



	



	
	// 圖片輪播初始化
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		lazyLoad:true,
		autoplay:false,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
	    loop:false,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            slideBy:1,
	            nav:true
	        },
	        640:{
	            items:3,
	            slideBy:1,
	            autoplayTimeout:2000,
	            nav:true
	        },
	        800:{
	            items:3,
	            slideBy:1,
	            autoplayTimeout:2000,
	            nav:true
	        },
	        1000:{
	            items:3,
	            slideBy:3,
	            autoplayTimeout:4000,
	            nav:true
	        }
	    }
	});

	

	$(window).scroll(function(event) {
		var st = this.scrollY;
		var offSetW = $('.works-content').offset().top;
		console.log(st);
		console.log(offSetW);
		if (st >= offSetW - 150){
			owl.trigger('play.owl.autoplay',[4000]);
		}
	});	
	

	// lazyload
	// $('.grid-item .lazyload').lazyload();

	// // vanilla-lazyload
	// var lazyLoadInstance = new LazyLoad({
	//   // Your custom settings go here
	// });

	// lazyLoadInstance.update();


	// document.getElementsByTagName('.grid-item img').onload=function(){ 
	// 	$(".skeleton__product").fadeOut(400);
	// };

	// $('.grid-item img,.grid-item-content img').load(function() {
	// 	$(".skeleton__product").remove();
	// });


	// // 判斷圖片載入
	// var t_img; // 定時器
	// var isLoad = true; // 控制變數
	// // 判斷圖片載入狀況，載入完成後回撥
	// isImgLoad(function(){
	// // 載入完成
	// });
	// // 判斷圖片載入的函式
	// function isImgLoad(callback){
	// // 注意我的圖片類名都是cover，因為我只需要處理cover。其它圖片可以不管。
	// 	// 查詢所有封面圖，迭代處理
	// 	var $imgLoad = $('.grid-item img,.grid-item-content img');
		
	// 	// 找到為0就將isLoad設為false，並退出each
	// 	if($imgLoad.height === 0){
	// 		isLoad = false;
	// 		// return false;
	// 	}
		

	// 	// $imgLoad.each(function(){
	// 	// 	// 找到為0就將isLoad設為false，並退出each
	// 	// 	if(this.height === 0){
	// 	// 		isLoad = false;
	// 	// 		return false;
	// 	// 	}
	// 	// });

	// 	// 為true，沒有發現為0的。載入完畢
	// 	if(isLoad){
	// 		$(".skeleton__product").fadeOut(400);
	// 		// 回撥函式
	// 		callback();
	// 		// 為false，因為找到了沒有載入完成的圖，將呼叫定時器遞迴
	// 	}else{
	// 		isLoad = true;
	// 		t_img = setTimeout(function(){
	// 			isImgLoad(callback); // 遞迴掃描
	// 		},500); // 我這裡設定的是500毫秒就掃描一次，可以自己調整
	// 	}
	// }


	// // 判斷圖片載入new
	// var imgdefereds=[];
	// $('.grid-item-content img').each(function(){
	// 	var dfd=$.Deferred();
	// 	$(this).bind('load',function(){
	// 		dfd.resolve();
	// 	}).bind('error',function(){
	// 	//圖片載入錯誤，加入錯誤處理
	// 	// dfd.resolve();
	// 	})
	// 	if(this.complete) setTimeout(function(){
	// 		dfd.resolve();
	// 		console.log('loaded!!');
	// 		$(".skeleton__product").fadeOut(400);
	// 	},1000);
	// 	imgdefereds.push(dfd);
	// })
	// $.when.apply(null,imgdefereds).done(function(){
	// 	// $(".skeleton__product").fadeOut(400);
	// });


	// $(".grid-item img").load(function(){
	// 	console.log("載入完成！");
	// 	$(".skeleton__product").fadeOut(400);
	// });


	// // 判斷圖片載入new new
	// $('.grid-item img').each(function(){
	//     $(this).imagesLoaded(function(){
	//         console.log('loaded!!');
	//         $(".skeleton__product").fadeOut(400);
	//     });
	// });
	// $('.grid-item-content img').each(function(){
	//     $(this).imagesLoaded(function(){
	//         console.log('loaded!!');
	//         $(".skeleton__product").fadeOut(400);
	//     });
	// });




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
		$(this).parent().siblings().find('.btn').removeClass('is-active');

	});

	$('.jq-sqare-grid').on('swipeleft',swipeHandler);
	function swipeHandler(){
		
		
		var widthGridItemContent = parseInt($('.grid-item-content').css('width')) + 10;
		console.log(widthGridItemContent);
		
		// var startScroll = 0;
		

	    $('.jq-sqare-grid').animate({
			scrollLeft: widthGridItemContent * 3
		}, 200, 'swing');
		// widthGridItemContent = 0;
	  }


	$('.jq-sqare-grid').scroll(function(){
		var sleft = $('.jq-sqare-grid').scrollLeft();
		// console.log(sleft);
		var widthGridItemContent = parseInt($('.grid-item-content').css('width')) + 10;
		// console.log(widthGridItemContent);
		var moveNext = Math.ceil(sleft / widthGridItemContent);
		// console.log(moveNext);
		// $('.jq-sqare-grid').animate({
		// 	scrollLeft: (80+10) * moveNext
		// }, 200, 'swing');

		// $('.jq-sqare-grid').animate({
		// 	scrollLeft: (80+10) * moveNext
		// }, 200, 'swing');

		// sleft = 0;
	});

	// $('.jq-sqare-grid').swipe({
	// 	threshold: 0,
	//     swipe:function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
	//         console.log([event, direction, distance, duration, fingerCount, fingerData, currentDirection]);
	      
	//         // console.log($(this).direction);  
	//         console.log([distance]);

	// 		var widthGridItemContent = parseInt($('.grid-item-content').css('width'));
	// 		console.log(widthGridItemContent);
	// 		var moveNext = Math.ceil([distance] / widthGridItemContent);

	//         $(this).animate({
	// 			scrollLeft: [distance] * moveNext
	// 		}, 200, 'swing');
	// 		console.log($('.jq-sqare-grid').scrollLeft());
	//     }

	// var $scrollLeft = $('.jq-sqare-grid').scrollLeft();

	$('.btn.first').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: 0
		}, 200, 'swing');
	});

	$('.btn.prev').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: '-=390'
		}, 200, 'swing');
	});

	$('.btn.next').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: '+=390'
		}, 200, 'swing');
	});

	$('.btn.last').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: 2500
		}, 200, 'swing');
	});
	

	// RWD顯示設定

	function windowSize() {
	    if ($(window).width() <= 736 || ($(window).width() >= 800 && $(window).width() <= 896)) {
	        $('.jq-sqare-grid').show();
	        $('.jq-grid').hide();
	        // 正方形縮圖排版
			var $gridS = $('.jq-sqare-grid').isotope({
			  itemSelector: '.sqare-grid-item',
			  layoutMode: 'masonryHorizontal',
			  masonryHorizontal: {
			    // columnWidth: '.sqare-grid-item',
			 //    rowHeight: 100,
				// gutter: 10,
				rowHeight: 100,
				gutter: 30
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

			// // init Isotope after all images have loaded
			// var $gridS = $('.jq-sqare-grid').imagesLoaded( function() {
			//   $gridS.isotope({
			//     itemSelector: '.sqare-grid-item',
			//     // percentPosition: true,
			//     layoutMode: 'masonryHorizontal',
			// 	masonryHorizontal: {
			// 		rowHeight: 100,
			// 		gutter: 30
			//     }
			//   });
			// });

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




			// // init Isotope after all images have loaded
			// var $gridL = $('.jq-grid').imagesLoaded( function() {
			//   $gridL.isotope({
			//     itemSelector: '.grid-item',
			//     layoutMode: 'masonry',
			// 		percentPosition: true,
			// 		// layout mode options
			// 		masonry: {
			// 		columnWidth: '.grid-sizer'
			// 	}
			//   });
			// });





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


	// // skeleton loading效果
	// const elements = {
	//   skeleton: document.querySelector('.skeleton__product')
	// }


	// // Remove setTimeOut 
	// setTimeOut(() => {
	// window.addEventListener("load", () => {
	//   document.body.style.overflow = "visible";
	//   elements.skeleton.style.display = "none";
	// });
	// }, 15000);


	



	// fancybox 設定
	$('[data-fancybox="m-gallery"]').fancybox({
		thumbs : {
			autoStart : false
		},
		// buttons: [
		// 	"zoom",
		// 	"share",
		// 	"slideShow",
		// 	"fullScreen",
		// 	"download",
		// 	"thumbs",
		// 	"close"
		// ]
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

	

	$('[data-fancybox="c-img"]').fancybox({
		selector : '.owl-item:not(.cloned) a',
		hash   : false,
		thumbs : {
		autoStart : true
		},
		// buttons : [
		// 	'zoom',
		// 	'download',
		// 	'close'
		// ]
	});

	$('[data-fancybox]').fancybox({
		protect: true,
		buttons : [
			'zoom',
			'fullScreen',
			'close'
		]
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


	// // 頁面載入動畫loading
	// window.onload = function() { 
	// 	$(".loading").fadeOut(400);
	// };

	

	// 滑鼠移入顯示圖說
	$('.grid-item').mouseenter(function(){
		var imgText = $(this).find('a').attr('data-caption');
		// console.log(imgText);
	    $(this).find('h5').append(imgText);
	});
	$('.grid-item').mouseleave(function(){
		// var imgText = $(this).find('a').attr('data-caption');
		// console.log(imgText);
	    $(this).find('h5').text('');
	});
	

});



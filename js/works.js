$(document).ready(function(){

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
		}, 400, 'swing');
	});

	$('.btn.prev').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: '-=390'
		}, 400, 'swing');
	});

	$('.btn.next').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: '+=390'
		}, 400, 'swing');
	});

	$('.btn.last').click(function() {
		$('.jq-sqare-grid').animate({
			scrollLeft: 2500
		}, 400, 'swing');
	});
	

	// RWD顯示設定

	function windowSize() {
	    if ($(window).width() <= 736 || ($(window).width() >= 800 && $(window).width() <= 896)) {
	        $('.jq-sqare-grid').show();
	        $('.jq-grid').hide();
	        // 正方形縮圖排版
			// var $gridS = $('.jq-sqare-grid').isotope({
			//   itemSelector: '.sqare-grid-item',
			//   layoutMode: 'masonryHorizontal',
			//   masonryHorizontal: {
			//     // columnWidth: '.sqare-grid-item',
			//  //    rowHeight: 100,
			// 	// gutter: 10,
			// 	rowHeight: 100,
			// 	gutter: 30
			//   }
			// });


			// var $win = $(window);
		 //    var $imgs = $(".lazy-img");

			// $gridS.isotope({
			//     onLayout: function() {
			//         $win.trigger("scroll");
			//     }
			// });

			// $imgs.lazyload({
			//     failure_limit: Math.max($imgs.length - 1, 0)
		 //    });


			var $win = $(window),
		        $imgs = $(".lazy-img"),
		        $gridS = $('.jq-sqare-grid');

	        $imgs.show().lazyload({
		        effect: "fadeIn",
		        failure_limit: Math.max($imgs.length - 1, 0)
		    });

		    $gridS.isotope({
		        itemSelector: '.sqare-grid-item',
				layoutMode: 'masonryHorizontal',
				masonryHorizontal: {
				rowHeight: 100,
				gutter: 30
				},
		        onLayout: function () {
		            $win.trigger("scroll");
		        }
		    });

		 //    function loadVisible($els, trigger) {
		 //        $els.filter(function () {
		 //            var rect = this.getBoundingClientRect();
		 //            return rect.top >= 0 && rect.top <= window.innerHeight;
		 //        }).trigger(trigger);
		 //    }

		 //    $gridS.isotope('on', 'layoutComplete', function () {
		 //        loadVisible($imgs, 'lazylazy');
		 //    });

		 //    $win.on('scroll', function () {
		 //        loadVisible($imgs, 'lazylazy');
		 //    });

		 //    $imgs.lazyload({
		 //        effect: "fadeIn",
		 //        failure_limit: Math.max($imgs.length - 1, 0),
		 //        event: 'lazylazy'
		 //    });

		    // $('#asc').click(function (event) {
		    //     $gridS.isotope({
		    //         sortAscending: true,
		    //         sortBy: 'original'
		    //     });
		    // });

		    // $('#desc').click(function (event) {
		    //     $gridS.isotope({
		    //         sortAscending: false,
		    //         sortBy: 'original'
		    //     });
		    // });

		    // $('#thin').click(function (event) {
		    //     $gridS.isotope({
		    //         sortAscending: true,
		    //         filter: 'img[width="333"]',
		    //         sortBy: 'original'
		    //     });
		    // });

		    // $('#all').click(function (event) {
		    //     $gridS.isotope({
		    //         sortAscending: true,
		    //         filter: '',
		    //         sortBy: 'original'
		    //     });
		    // });





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
	    $(this).find('h4').append(imgText);
	});
	$('.grid-item').mouseleave(function(){
		// var imgText = $(this).find('a').attr('data-caption');
		// console.log(imgText);
	    $(this).find('h4').text('');
	});


	// 進入特定區域物件跟隨滑鼠
    var mouseX = 0, mouseY = 0, pinata = $(".grid-item .img-text"), limitX = 600, limitY = 2000;
	$(".grid-item__inner").on("mousemove", function(e){
	  var offset = $(this).offset();
	  mouseX = Math.min(e.pageX - offset.left - 180, limitX);
	  mouseY = Math.min(e.pageY - offset.top - 60, limitY);
	  pinata.css({left: mouseX, top: mouseY});
	  
	})


	// 行動版雙擊按鈕時禁用縮放
	var doubleTouchStartTimestamp = 0;
	$(document).bind("touchstart", function (event) {
	    var now = +(new Date());
	    if (doubleTouchStartTimestamp + 500 > now) {
	        event.preventDefault();
	    }
	    doubleTouchStartTimestamp = now;
	});

});




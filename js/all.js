$(document).ready(function(){
	// Filterizr 圖片篩選插件
	$('.shouceren').filterizr();
	$('.nav-1 li,.nav-3 li,.nav-5 li').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	$('.nav-2 li').on('click', function() {
		$(this).toggleClass('active');
	});
	$('.shouceren5').filterizr({
		filter: 1
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



	// init Isotope
	var $grid = $('.jq-grid').isotope({
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
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});




	// 正方形縮圖排版
	var $grid = $('.jq-sqare-grid').isotope({
	  itemSelector: '.sqare-grid-item',
	  layoutMode: 'masonryHorizontal',
	  masonryHorizontal: {
	    // columnWidth: '.sqare-grid-item',
	    rowHeight: 100,
		gutter: 10
	  }
	});

	// $grid.on( 'click', '.grid-item-content', function() {
	//   $( this ).parent('.sqare-grid-item').toggleClass('is-expanded');
	//   $grid.isotope('layout');
	// });

	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});

	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});



	// RWD顯示設定

	function windowSize() {
	    if ($(window).width() < 576) {
	        $('.jq-sqare-grid').show();
	        $('.jq-grid').hide();
	    } else {
	        $('.jq-sqare-grid').hide();
	        $('.jq-grid').show();
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




	// UI Scroll 上下捲動，控制 Header 的消失與顯示
	var lastScrollY = 0;

	$(window).scroll(function(event) {
		
		var st = this.scrollY;

		if (st < lastScrollY) {
			$('.header').removeClass('hideUp');
		} else {
			$('.header').addClass('hideUp');
		}
		lastScrollY = st;
	});

	// 回到最頂端的TOP按鈕
	$('.top a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		},1000);
	});
		

});



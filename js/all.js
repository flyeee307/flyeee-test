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
	var $grid = $('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'masonry',
	  // percentPosition: true,
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

	// Check if current image dimensions are smaller than actual
	instance.isScaledDown();

	// Scale image to the actual size of the image
	instance.scaleToActual( x, y, duration );

	// Check if image dimensions exceed parent element
	instance.canPan();

	// Scale image to fit inside parent element
	instance.scaleToFit( duration );




});

$(function(){

	// simulate image loading
	setTimeout(function(){
		$('.big-image').addClass('loaded');
	}, 1000);

	$('.menu-button').on('click', function(){
		$('nav').toggleClass('show');
	});

	$('.inline-ad').parallax({
		imageSrc: 'http://lorempixel.com/output/nightlife-q-c-1280-720-4.jpg',
		speed: 0.5
	});

	$('.author-image').on('click', function(){
		$.scrollTo(0, 500);
	});

	$('.preamble').waypoint(function(){
		$(this.element).children('blockquote').addClass('open');
		// force parallax plugin to resize after this opens
		setTimeout(function(){
			$(window).trigger('resize');
		}, 300);
		
	});

});
$(document).ready(function() {

	$('.js-menu').click(function(event){
		$(this).toggleClass('is-active');
		$('.header__menu').toggleClass('is-open');
		$('.header__lang').toggleClass('is-hidden');
		$('.header__right').toggleClass('is-menu-open');
	});

	$('.js-slick').slick({
		fade: true,
		arrows: false,
		dots: true
	});

	$('.js-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
		   {
		     breakpoint: 980,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 768,
		     settings: {
		       slidesToShow: 1,
		     }
		   }
		 ]
	});

//inputs focus 

	$('.js-input').focusin(function() {
		$(this).parent('.js-field').addClass('is-active');
	});	
	$('.js-input').focusout(function() {
			$(this).parent('.js-field').removeClass('is-active');	
	});

	//effects
	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
	  
		$(".js-visibility").each(function(){
		
			var block_position = $(this).offset().top;

			if(start_visibility >= block_position){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();
	$(window).scroll(function(){
		visibility();
	});
	$(window).load(function(){
		visibility();
	});


$('.js-nav a').on('click', function() {
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 10
        }, 500);
        return false;
    });
 
});
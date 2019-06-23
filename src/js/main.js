$(document).ready(function() {
	$('.owl-carousel--reviews').owlCarousel({
			nav:true,
			// navText: ["<i class="material-icons">navigate_before</i>", "<i class="material-icons">navigate_next</i>"],
			navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
		  items:3,
		  loop:true,
		  dots: true,
		  navSpeed:1000,
		  responsive: {
			   0: {
				   items: 1,
			   },
			   768:{
				items:2,
			   },
			   1200:{
				items:3,
			   }
		   }
		});

	$('.owl-carousel--gallery').owlCarousel({
			nav:true,
			// navText: ["<i class="material-icons">navigate_before</i>", "<i class="material-icons">navigate_next</i>"],
			navText: ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
		  items:1,
		   loop:true,
		  dots: true,
		  navSpeed:2000,

		});
	$(function(){
		var owl = $('.owl-carousel--card');
		owl.owlCarousel({
			nav:true,
			navText : ["<i class='material-icons'>keyboard_arrow_left</i>", "<i class='material-icons'>keyboard_arrow_right</i>"],
		  // autoplay: 4000,
		  // loop: true,
		  items:1,
		  onInitialized  : counter, //When the plugin has initialized.
		  onTranslated : counter //When the translation of the stage has finished.
		});

		function counter(event) {

			var element   = event.target;         // DOM element, in this example .owl-carousel
			var items     = event.item.count;     // Number of items
			var item      = event.item.index + 1;     // Position of the current item

			$(event.target).siblings('.counter').html(item+" / "+items)
		}
		});

	//-phone mask
	$(".phone").mask("+7(999)999-99-99");

	//-button back
	$("#back-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
					$('#back-top').fadeIn();
			} else {
					$('#back-top').fadeOut();
			}
		 });
	});

	//focus and blur for input
	let formInput = $('.contact-form__group input');

	formInput.each(function(){
		$(this).on('focus', function(){
		$(this).addClass('active-input');
		})
	});

	formInput.each(function(){
		$(this).on('blur', function(){
		$(this).removeClass('active-input');
		})
	});

    //-mobile-menu
    let menuToggle = $('#nav-menu-toggle');
    let mobileMenu = $('#nav-mobile');

    if($(window).innerWidth() < 992){

    	menuToggle.on('click', function(){
    		console.log(555)
    		mobileMenu.toggleClass('show');
    		$("body").toggleClass('stopScroll');
    	});

    	mobileMenu.on('click', function(){
    		$(this).removeClass('show');
    		menuToggle.removeClass('active');
    		$("body").removeClass('stopScroll');
    	})
    }

    $(window).resize(function() {
    	mobileMenu.removeClass('show');
    	menuToggle.removeClass('active');
    	$("body").removeClass('stopScroll');
    });

    //-fix-top-menu
    $(function () {
    	$(window).scroll(function () {
    		if ($(this).scrollTop() > 80) {
                $('.header-menu').addClass('fixed');
                $('.header-slim').addClass('fixed');
        	} else {
               $('.header-menu').removeClass('fixed');
       		}
		});

	});
})

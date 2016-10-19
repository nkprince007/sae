$(window).on('load',function() {

	//Hide preloader
	$('#fakeloader').fadeTo(1500,0);
	setTimeout(function(){
		$('#fakeloader').hide();	
	},1500);
});

$(document).ready(function() {
    $('.cb-slideshow').vegas({
        slides: [
            { src: 'static/images/slides/1.jpg' },
            { src: 'static/images/slides/2.jpg' },
            { src: 'static/images/slides/3.jpg' },
            { src: 'static/images/slides/4.jpg' }
        ],
        transitionDuration: 1000,
        delay: 5000,
        transition: ['zoomIn','flash','zoomOut']
    });
    //Smooth Scrolling
	if($(window).width() > 768) {
		$("body").smoothWheel();
	}
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		var obj=document.getElementById('logo-white');
		var imgb=document.getElementById('logo-black');
		obj.style.width = "23%";
		imgb.style.width = "23%";
		if (scroll >= 50) {
			$('#header').addClass('fixed');
			obj.style.opacity = "0";	
		} else {
			$('#header').removeClass('fixed');
			obj.style.opacity = "1";
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	//Scroll To top on init
	$('#banner').velocity('scroll', 1000);

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');
	
	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this),
	    	id = $el.attr('href');
        $(id).velocity('scroll', { duration: 1500 });
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	//Scroll Reveal
	window.sr = ScrollReveal({
		mobile: false, 
		duration: 1500, 
		// beforeReveal: function (domEl) {console.log(domEl.id+"beforeReveal")},
		// beforeReset: function (domEl) {console.log(domEl.id+"beforeReset")},
		// afterReveal: function (domEl) {console.log(domEl.id+"afterReveal")},
		// afterReset: function (domEl) {console.log(domEl.id+"afterReset")},
		useDelay: 'once'
	});
	sr.reveal('.about-sae-content', {origin: 'right'});
	sr.reveal('.about-baja-content', {origin: 'left'});
	sr.reveal('.l-img', {origin: 'left'});
	sr.reveal('.r-img', {origin: 'right'});
	sr.reveal('.events-title');
	sr.reveal('.event-img', 100);
	sr.reveal('.event-list li');
	sr.reveal('.gallery-title');
	sr.reveal('.team-title', {origin: 'right'});
	sr.reveal('.team-hr');
	sr.reveal('.team-h4', {origin: 'left'});
	sr.reveal('.sponsor-list li img', 100);
	sr.reveal('.perm',{scale: 0.1 , duration: 500 },50);
	sr.reveal('.pfl',{origin: 'right', distance: '65%', duration: 500});
	sr.reveal('.pfr',{origin: 'left', distance: '65%', duration: 500});
	sr.reveal('.cname',{origin: 'left', distance: '25%', duration: 500 });
	sr.reveal('.cemail',{origin: 'right', distance: '25%', duration: 500 });
	sr.reveal('.cmessage',{origin: 'left', distance: '25%', duration: 500 });
	sr.reveal('.csubmit', {origin: 'right', distance: '25%', duration: 500 });
	sr.reveal('.contact-title');

    //Team Section Hider
	i = false;
	$('#arrow').click(function(){
		var src = "";
		if($(this).hasClass('up-arrow')) {
			$('div.more').velocity('slideUp', 500);
			$(this).removeClass('up-arrow').addClass('down-arrow');
            if(i)
                $('#teams').velocity('scroll');
			i = true;
            src = $(this).attr("src").replace('images/arrowUp.png','images/arrowDown.png');
		} else {
			$('div.more').velocity('slideDown', 500);
			$(this).removeClass('down-arrow').addClass('up-arrow');
			src = $(this).attr("src").replace('images/arrowDown.png','images/arrowUp.png');
		}
		$(this).attr("src",src);
 	});
	$("#arrow").click();

	//Gallery Fancybox Generation
	//FEST
	$(".wb-1").click(function(){
		$.fancybox.open([
			{ href : 'images/fest/1.jpg' },
			{ href : 'images/fest/2.jpg' },
			{ href : 'images/fest/3.jpg' },
			{ href : 'images/fest/4.jpg' },
			{ href : 'images/fest/5.jpg' },
			{ href : 'images/fest/6.jpg' },
			{ href : 'images/fest/7.jpg' },
			{ href : 'images/fest/8.jpg' },
			{ href : 'images/fest/9.jpg' },
			{ href : 'images/fest/10.jpg' },
			{ href : 'images/fest/11.jpg' },
			{ href : 'images/fest/12.jpg' },
			{ href : 'images/fest/13.jpg' },
			{ href : 'images/fest/14.jpg' }
		], {
			padding : 0,
			openEffect : 'elastic',
			closEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'elastic',
			beforeShow: function () {
				/* Disable right click */
				$.fancybox.wrap.bind("contextmenu", function (e) {
						return false; 
				});
       		}
		});
		return false;
	});
	//ROBOTICS
	$(".wb-2").click(function(){
		$.fancybox.open([
			{ href : 'images/robotics/1.jpg' },
			{ href : 'images/robotics/2.jpg' },
			{ href : 'images/robotics/3.jpg' },
			{ href : 'images/robotics/4.jpg' },
			{ href : 'images/robotics/5.jpg' },
			{ href : 'images/robotics/7.jpg' },
			{ href : 'images/robotics/8.jpg' },
			{ href : 'images/robotics/9.jpg' }
		], {
			padding : 0,
			openEffect : 'elastic',
			closEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'elastic',
			beforeShow: function () {
				$.fancybox.wrap.bind("contextmenu", function (e) {
						return false; 
				});
       		}
		});
		return false;
	});
	//WORKSHOP
	$(".wb-3").click(function(){
		$.fancybox.open([
			{ href : 'images/workshop/1.jpg' },
			{ href : 'images/workshop/2.jpg' },
			{ href : 'images/workshop/4.jpg' },
			{ href : 'images/workshop/5.jpg' },
			{ href : 'images/workshop/7.jpg' },
			{ href : 'images/workshop/8.jpg' }
		], {
			padding : 0,
			openEffect : 'elastic',
			closeEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'elastic',
			beforeShow: function () {
				$.fancybox.wrap.bind("contextmenu", function (e) {
						return false; 
				});
			}
		});
		return false;
	});
	//EVENTS
	$(".upcoming-fancybox, .event-fb").fancybox({
		padding: 0,
		openEffect: 'elastic',
		closeEffect: 'fade',
		nextEffect: 'fade',
		prevEffect: 'elastic',
		beforeShow: function () {
			$.fancybox.wrap.bind("contextmenu", function (e) {
					return false; 
			});
		}
	});
	
	$('.info-success').hide();
	
});

$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".nav");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	 $(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.nav ul, .btn_menu').length) {
			if($(".nav").hasClass('open')) {
				$(".nav").removeClass('open');
			}
		}
	});
	$(".modal_img").on('click', function(){
		var $this = $(this).parents("body");

		if($this.hasClass("modal_popup")){
			$this.removeClass("modal_popup");
		} else {
			$this.addClass('modal_popup');
		}
	});
	(function() {
 
	  	window.inputNumber = function(el) {

	    var min = el.attr('min') || false;
	    var max = el.attr('max') || false;

	    var els = {};

	    els.dec = el.prev();
	    els.inc = el.next();

	    el.each(function() {
	      init($(this));
	    });

    	function init(el) {

	      els.dec.on('click', decrement);
	      els.inc.on('click', increment);

		function decrement() {
	        var value = el[0].value;
	        value--;
	        if(!min || value >= min) {
	          el[0].value = value;
	        }
	      }

		function increment() {
	        var value = el[0].value;
	        value++;
	        if(!max || value <= max) {
	          el[0].value = value++;
	        }
	      }
	    }
	  }
	})();

	inputNumber($('.input-number'));

	$(".container_cross").on('click', function(){
		$(this).parents("body").removeClass('modal_popup');
	});
	$("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
	$('html,body').animate( { scrollTop: destination }, 1500 );
		return false;
	});
	$(window).scroll(function(){
	    var scrolled = $(this).scrollTop();
	    if( scrolled >= 30 ) {
	        $('.section_header_top').addClass('fix_header');
	    }   
	    if( scrolled <= 30 ) {     
	        $('.section_header_top').removeClass('fix_header');
	    }
	});
});


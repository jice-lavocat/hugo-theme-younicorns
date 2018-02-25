jQuery(function($) {
  "use strict";
////////////////////////////////////////////////////////
///////////////preloader ///////////////////////////
////////////////////////////////////////////////////////

	$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
	});

////////////////////////////////////////////////////////
///////////////dropdown hover//////////////
////////////////////////////////////////////////////////
    $(".menu .dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });

////////////////////////////////////////////////////////
///////////////back to top ///////////////////////////
////////////////////////////////////////////////////////


	var offset = 220;
	var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

////////////////////////////////////////////////////////
///////////////Parallax effects/////////////////////////
////////////////////////////////////////////////////////


$('div.bgParallax').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed'));

		var bgpos = '50% '+ yPos + 'px';

		$obj.css('background-position', bgpos );

	});
});
////////////////////////////////////////////////////////
///////////////gallery owl-carousel ///////////////////////////
////////////////////////////////////////////////////////
  // $("#feature-posts-grid").owlCarousel({
  //     items : 5,
  //     itemsDesktop : [1366,4],
  //     itemsDesktopSmall : [1024,3],
  //     pagination : false,
	 //  navigation : true,
	 //  lazyLoad : true
  // });

  // jQuery("#sponsor-carousel").owlCarousel({

  //   autoPlay: 3000, //Set AutoPlay to 3 seconds
 	// pagination: false,
  //   items : 3,
  //   itemsDesktop : [1199,4],
  //   itemsDesktopSmall : [979,3],
 	// navigation: true,
	 //  navigationText: [
  //     "<i class='fa fa-angle-left'></i>",
  //     "<i class='fa fa-angle-right'></i>"
  //     ]
  // });

////////////////////////////////////////////////////////
///////////////masonry ///////////////////////////
////////////////////////////////////////////////////////

	// jQuery('.masonry-container').masonry({
	// 	itemSelector: '.masonry-item'
	// 	// columnWidth: 152
	// });




////////////////////////////////////////////////////////
///////////////counter w/ firebase ///////////////////////////
////////////////////////////////////////////////////////

var counterToken = "counter_" + window.location.href ;
counterToken = counterToken.replace(/[^\w\s]/gi, ''); // remove bad characters for firebase child
var fakeVisits = 200 + counterToken.length;
var statToken = "https://blazing-fire-9615.firebaseio.com/" // we use this token instead of currentUrl to avoid conflict when using localhost
var fb = new Firebase(statToken);
var added = false;
var counter = fb.child(counterToken);
counter.on('value', function(snap) {
    var v = snap.val();
    v !== null && $('#counterCurrentPage').text( parseInt(fakeVisits + v) );
    added || add();
});

function add() {
   added = true;
   counter.transaction(function(currentVal) {
      isFinite(currentVal) ||  (currentVal = 0);
      return currentVal+1;
   });
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var prevTime = new Date(2013,11,2,0,0);  // Feb 1, 2011
  var thisTime = new Date();              // now
  var diff = thisTime.getTime() - prevTime.getTime();   // now - Feb 1
  var no_of_days =(diff / (1000*60*60*24)); 
  var exp = Math.ceil((no_of_days/365)*10)/10;
  $('#experience_year').html(exp);

})(jQuery); // End of use strict

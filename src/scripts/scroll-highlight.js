/*
    SCROLL HIGHLIGHT - Last updated: 19.05.15

    - Notes -

     An alternative to Foundation's Magellan:
     http://jsfiddle.net/mekwall/up4nu/
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var menuItems = $("a", $('.global-header')); // All list items
var hero = $('.hero');

$(document).foundation({
  "magellan-expedition": {
  active_class: 'active', // specify the class used for active sections
  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: 60, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
  }
});

//-----------------------------------------------------------------
// Valuable for reference
//-----------------------------------------------------------------

$('.global-header .logo').click(function(e){
  // var href = $(this).attr("href");
  // var offsetTop = href == "#top" ? 0 : $(href).offset().top-topMenuHeight+1;

  e.preventDefault();

  $('html, body').stop().animate({ scrollTop: 0 }, 300);
});

//-----------------------------------------------------------------
// Bind to scroll
//-----------------------------------------------------------------

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if (scrollTop >= hero.height()) {
       $('.js-global-header').addClass('has-logo');
    } else {
       $('.js-global-header').removeClass('has-logo');
    }

    if (scrollTop + $(window).height() >= $(document).height()-50) {
      $('.global-navigation li').addClass('active-override-off');
      $('.global-navigation li:last-child').addClass('active-override-on');
    } else {
      $('.global-navigation li:last-child').removeClass('active-override-on');
      $('.global-navigation li').removeClass('active-override-off');
    }
});

//==================================================
//
//==================================================
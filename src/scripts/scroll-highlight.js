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

// $(document).foundation({
//   "magellan-expedition": {
//   active_class: 'active', // specify the class used for active sections
//   threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
//   destination_threshold: 60, // pixels from the top of destination for it to be considered active
//   throttle_delay: 50, // calculation throttling to increase framerate
//   fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
//   offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
//   }
// });

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
       $('.js-global-header').addClass('has-logo animated fadeIn');
    } else {
       $('.js-global-header').removeClass('has-logo animated fadeIn');
    }

    if (scrollTop + $(window).height() >= $(document).height()-50) {
      $('.global-navigation li').addClass('active-override-off');
      $('.global-navigation li:last-child').addClass('active-override-on');
    } else {
      $('.global-navigation li:last-child').removeClass('active-override-on');
      $('.global-navigation li').removeClass('active-override-off');
    }
});

//-----------------------------------------------------------------
// Bind to scroll
//-----------------------------------------------------------------

// Cache selectors
var lastId,
    topMenu = $(".js-scroll-highlight"),
    topMenuHeight = topMenu.outerHeight()+90,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});

//==================================================
//
//==================================================
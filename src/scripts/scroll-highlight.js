/*
    SCROLL HIGHLIGHT - Last updated: 31.03.15

    - Notes -

     An alternative to Foundation's Magellan
     http://jsfiddle.net/mekwall/up4nu/
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var lastId;
var topMenu = $(".js-scroll-highlight");
var topMenuHeight = topMenu.outerHeight()+15;
var menuItems = topMenu.find("a"); // All list items

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

// Anchors corresponding to menu items
var scrollItems = menuItems.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) return item;
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href");
  var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

  $('html, body').stop().animate({ scrollTop: offsetTop }, 300);
  e.preventDefault();
});

//-----------------------------------------------------------------
// Bind to scroll
//-----------------------------------------------------------------

$(window).scroll(function(event){

   var fromTop = $(this).scrollTop()+topMenuHeight; // Get container scroll position
   var y = $(this).scrollTop();

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

	// Magic numbers ahead - height of sticky nav
  if (y >= 36) {
     $('.js-global-header').addClass('is-sticky');
  } else {
     $('.js-global-header').removeClass('is-sticky');
  }

  if (y >= 766) {
     $('.js-global-header').addClass('has-logo');
  } else {
     $('.js-global-header').removeClass('has-logo');
  }

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
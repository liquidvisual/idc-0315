/*
    MAIN SCRIPTS - Last updated: 00-00-00
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

// window.onload = function(){
//     // NProgress.done();
// }

//-----------------------------------------------------------------
// Testimonial Slider
//-----------------------------------------------------------------

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2
});

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

// var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

$('#off-canvas-menu').mmenu({ "offCanvas": { "position": "right" }});

var API = $("#off-canvas-menu").data("mmenu");

$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    API.open();
});

//-----------------------------------------------------------------
// Fix 100vh in Mobile Safari
// http://blog.rodneyrehm.de/archives/34-iOS7-Mobile-Safari-And-Viewport-Units.html
//-----------------------------------------------------------------

var IS_MOBILE_SAFARI = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);

if (IS_MOBILE_SAFARI) {
    var $element = $('.hero');

    function fixMobileSafariViewport() {
        $element.css('height', window.innerHeight);
    }

    // listen to portrait/landscape changes
    window.addEventListener('orientationchange', fixMobileSafariViewport, true);
    fixMobileSafariViewport();
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

if (TOUCH_ENABLED) {
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    /*$(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });*/
}

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================
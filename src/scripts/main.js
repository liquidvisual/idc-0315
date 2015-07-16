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
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

$('#off-canvas-menu').mmenu({ "offCanvas": { "position": "right" }});

var API = $("#off-canvas-menu").data("mmenu");

$('.header-mobile-menu').bind('click', function(e) {
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
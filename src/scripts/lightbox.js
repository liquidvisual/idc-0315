/*
    Lightbox - Last updated: 17.05.15

    - Notes -

     Uses Magnific Popup

     Usage:
            <a class="image-popup-no-margins" href="...">
              <img src="..." alt="">
            </a>
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Image Popup
//-----------------------------------------------------------------

// $(function() {
//     $('.image-popup-no-margins').magnificPopup({
//        type: 'image',
//        closeOnContentClick: true,
//        closeBtnInside: false,
//        fixedContentPos: true,
//        mainClass: 'mfp-with-zoom', // class to remove default margin from left and right side
//        image: {
//           verticalFit: true
//        },
//        zoom: {
//           enabled: true,
//           duration: 300 // don't foget to change the duration also in CSS
//        }
//     });
// });

//==================================================
// Video Popup
//==================================================

$(function() {
  $('.popup-youtube').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});
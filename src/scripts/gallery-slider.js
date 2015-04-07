/*
    GALLERY-SLIDER.JS - Last updated: 06.04.15
*/
//-----------------------------------------------------------------
// Markup Reference
//-----------------------------------------------------------------
/*
<div class="gallery-slider section">
  <div class="slider slider-for">
    {% for i in (1..6) %}
      <div><img width="100%" src="http://kenwheeler.github.io/slick/img/fonz1.png" alt=""></div>
    {% endfor %}
  </div>
  <div class="slider slider-nav">
    {% for i in (1..6) %}
      <div><img width="100%" src="http://kenwheeler.github.io/slick/img/fonz1.png" alt=""></div>
    {% endfor %}
  </div>
</div>
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Gallery Slider
//-----------------------------------------------------------------

$(".gallery-slider").each(function(){

    var $this = $(this);
    var $sliderNav = $('.slider-nav', $this);
    var $sliderFor = $('.slider-for', $this);

    $sliderFor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: $sliderNav
    });

    $sliderNav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: $sliderFor,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
});

//==================================================
//
//==================================================
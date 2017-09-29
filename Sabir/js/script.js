new WOW().init();

$(document).ready(function () {
  var owl = $(' .testimonial  .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoplaySpeed: 1500

  });
  var owl = $('.slider_2 .owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 2000,

    margin: 20,
    center: true,
    items: 6,
  });


});
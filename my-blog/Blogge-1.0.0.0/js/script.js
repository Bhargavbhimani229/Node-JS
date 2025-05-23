$(document).ready(function () {
  "use strict";
  (document.getElementById("copyrightYear").innerHTML =
    new Date().getFullYear()),
    $(".widget-slider").slick({
      dots: !1,
      infinite: !0,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      autoplay: !0,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    $(window).on("scroll", function () {
      $(window).scrollTop()
        ? $("nav").addClass("nav-bg")
        : $("nav").removeClass("nav-bg");
    });
});

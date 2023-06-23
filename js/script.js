$(document).ready(function () {
  navigation = $("#myNav");
  mobileMenu = $("#buggerMenu");
  mobileMenu.click(function () {
    $("#buggerMenu #menuBtn .menu-trigger").toggleClass("active");
    navigation.toggleClass("showInMobile");
  });

  // {Start About us}
  // Slider we build in about page
  $(".weBuild .contentSec .boxLeft .buildSlider").slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // end
  // Slick list leader {about us}
  $("#listLead").slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });
  $(".boxLeader .box-content .arrow_box .prev").click(function () {
    $("#listLead").slick("slickPrev");
  });

  $(".boxLeader .box-content .arrow_box .next").click(function () {
    $("#listLead").slick("slickNext");
  });

  $("#listExecutive").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });
  $(".boxExecutive .box-content .arrow_box .prev").click(function () {
    $("#listExecutive").slick("slickPrev");
  });

  $(".boxExecutive .box-content .arrow_box .next").click(function () {
    $("#listExecutive").slick("slickNext");
  });

  // {End About us}

  // scroll to top

  $("#back-to-top").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".backtop").css("opacity", 1);
    } else {
      $(".backtop").css("opacity", 0);
    }
  });

  // end scroll
});

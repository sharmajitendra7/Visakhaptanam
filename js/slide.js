$(document).ready(function () {
    $(".multiple-items ul").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
    });
    $(".slide-profile ul").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
    });
    $(".slide-profile1 ul").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
    });
     $(".menu-icon").click(function () {
         $('.modal-mobile').show('slide, 500, right');
         $('.overlay-mobile').show('slide, 500, right');
       });
     });
     $(".close , .overlay-mobile").click(function () {
         $('.modal-mobile').hide('slide, 500, right');
         $('.overlay-mobile').hide('slide, 500, right');
       });
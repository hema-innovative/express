"use strict";

var swiper = new Swiper(".banner-slider", {
    speed: 600,
    parallax: true,
    autoplay: true,
    effect: 'fade',
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// Custom JS ----------------

// header fixed
let header = document.querySelector("header");
function handlescroll(){
  if(window.scrollY > 100){
      header.classList.add('fixed');
  }else{
      header.classList.remove('fixed');
  }
}
window.addEventListener('scroll', handlescroll);

// banner-slider
var swiper = new Swiper(".banner-slider", {
  speed: 4600,
  // parallax: true,
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

// project-slider
var swiper = new Swiper(".project-slider", {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 2,
  loop: true,
  speed: 600,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  }
});

// 
var swiper = new Swiper(".products-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  }
});

// 
var swiper = new Swiper(".clients-slider", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  }
});

// lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

// back to top btn


// multiple select
// $(document).ready(function() {
//   $('#multiple-checkboxes').multiselect({
//     includeSelectAllOption: true,
//   });
// });


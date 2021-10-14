const idxSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }
});

const idxSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

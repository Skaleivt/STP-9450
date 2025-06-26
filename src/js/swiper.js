import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.my-swiper', {
  // Optional parameters
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  initialSlide: 4,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      direction: 'vertical',
      loop: false,
      slidesPerView: 10,
      spaceBetween: 26,
    },
  },
});

new Swiper('.swiper-features', {
  // Optional parameters
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  initialSlide: 2,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 94,
    },
  },
});

new Swiper('.explore-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.explore-next',
    prevEl: '.explore-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 0,
    },
  },
  on: {
    init: function () {
      if (window.innerWidth >= 1200) {
        this.pagination.disable();
        this.pagination.el.style.display = 'none';
      }
    },
    resize: function () {
      if (window.innerWidth >= 1200) {
        this.pagination.disable();
        this.pagination.el.style.display = 'none';
      } else {
        this.pagination.enable();
        this.pagination.el.style.display = 'block';
      }
    },
  },
});

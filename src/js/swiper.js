import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
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

const swiper2 = new Swiper('.swiper-features', {
  // Optional parameters
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  initialSlide: 4,

  // If we need pagination
  pagination: {
    el: '.swiper2-pagination',
  },
  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 26,
    },
  },
});

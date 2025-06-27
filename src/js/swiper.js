import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  initReviewsSwiper();
  initFeaturesSwiper();
  initExploreSwiper();
});

function initReviewsSwiper() {
  const el = document.querySelector('[data-action="swiper-reviews"]');
  if (!el) return;

  new Swiper(el, {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    initialSlide: 4,
    pagination: {
      el: '.swiper-reviews-pagination',
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
}

function initFeaturesSwiper() {
  const el = document.querySelector('[data-action="swiper-features"]');
  if (!el) return;

  new Swiper(el, {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    initialSlide: 2,
    pagination: {
      el: '.swiper-features-pagination',
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
}

function initExploreSwiper() {
  const el = document.querySelector('[data-action="explore-swiper"]');
  if (!el) return;

  new Swiper(el, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.explore-swiper-pagination',
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
      init() {
        if (window.innerWidth >= 1200) {
          this.pagination.disable();
          if (this.pagination.el) this.pagination.el.style.display = 'none';
        }
      },
      resize() {
        if (window.innerWidth >= 1200) {
          this.pagination.disable();
          if (this.pagination.el) this.pagination.el.style.display = 'none';
        } else {
          this.pagination.enable();
          if (this.pagination.el) this.pagination.el.style.display = 'block';
        }
      },
    },
  });
}

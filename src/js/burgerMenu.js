// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const mobileMenu = document.querySelector('[data-visible]');
const openMenuBtn = document.querySelector('[data-action="open"]');
const closeMenuBtn = document.querySelector('[data-action="close"]');
const linkList = document.querySelector('[id="mobile-list-links"]');


openMenuBtn.addEventListener("click", e => {
  mobileMenu.classList.add("is-open");
  disableBodyScroll(document.body);
});

closeMenuBtn.addEventListener("click", e => {
  mobileMenu.classList.remove("is-open");
  enableBodyScroll(document.body);
});

linkList.addEventListener("click", e => {
  if (e.target.nodeName === "UL") return;
  mobileMenu.classList.remove("is-open");
  enableBodyScroll(document.body);
});



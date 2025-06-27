
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const mobileMenu = document.querySelector('[data-visible]');
const openMenuBtn = document.querySelector('[data-action="open"]');
const closeMenuBtn = document.querySelector('[data-action="close"]');
const linkList = document.querySelector('[id="mobile-list-links"]');


openMenuBtn.addEventListener("click", e => {
  mobileMenu.dataset.visible = "open";
  disableBodyScroll(document.body);
});

closeMenuBtn.addEventListener("click", e => {
  mobileMenu.dataset.visible = "close";
  enableBodyScroll(document.body);
});

linkList.addEventListener("click", e => {
  if (e.target.nodeName === "UL") return;
  mobileMenu.dataset.visible = "close";
  enableBodyScroll(document.body);
});



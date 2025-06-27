function reorderBlocks() {
  const wrapper = document.querySelector('[data-action="explore-wrapper"]');
  const block1 = document.querySelector('[data-action="explore-content"]');
  const block2 = document.querySelector('[data-action="explore-swipe"]');

  if (window.innerWidth >= 1199) {
    // На десктопі: Swiper перший
    if (wrapper.firstElementChild !== block2) {
      wrapper.insertBefore(block2, block1);
    }
  } else {
    // На мобілці: контент перший
    if (wrapper.firstElementChild !== block1) {
      wrapper.insertBefore(block1, block2);
    }
  }
}

window.addEventListener('resize', reorderBlocks);
window.addEventListener('DOMContentLoaded', reorderBlocks);

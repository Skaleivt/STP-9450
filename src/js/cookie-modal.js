const buttonAccept = document.querySelector(
  '[data-action="cookie-modal-btn-accept"]'
);
const buttonDecline = document.querySelector(
  '[data-action="cookie-modal-btn-decline"]'
);
const modal = document.querySelector('[data-action="cookie-modal"]');

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookiePolicy')) {
    setTimeout(() => {
      modal.style.display = 'block';
    }, 5000);
  }

  buttonAccept.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('cookiePolicy', 'true');
  });
  buttonDecline.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

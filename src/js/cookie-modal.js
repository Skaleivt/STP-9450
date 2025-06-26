const buttonAccept = document.getElementById('cookie-modal-btn-accept');
const buttonDecline = document.getElementById('cookie-modal-btn-decline');
const modal = document.getElementById('cookie-modal');

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

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('promoPopup').style.display = 'block';
  }, 2000);
});

function closePopup() {
  document.getElementById('promoPopup').style.display = 'none';
}
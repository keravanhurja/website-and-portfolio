const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menuItems');

hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('active');
  hamburger.classList.toggle('active'); //this is for the hamburger icon animation
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Slide in/out the menu
    hamburger.classList.toggle('active'); // Animate hamburger icon to "X"
});
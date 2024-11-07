const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menuItems');

hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('active');
  hamburger.classList.toggle('active'); //this is for the hamburger icon animation
});

function setup() {
  let myCanvas = createCanvas(50, 50);
  myCanvas.parent('canvas')
}

function draw() {
  background("purple");
}

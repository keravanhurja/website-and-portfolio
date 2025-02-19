const scrollContainer = document.querySelector('.scroll-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Track the current page index
let currentPageIndex = 0;
const totalPages = 2; // Now just two pages: profile and combined

// Scroll to the next or previous page
function scrollToPage(direction) {
  const scrollAmount = window.innerWidth;

  if (direction === 'right' && currentPageIndex < totalPages - 1) {
    currentPageIndex++;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else if (direction === 'left' && currentPageIndex > 0) {
    currentPageIndex--;
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  updateArrows();
}

// Update arrow visibility based on the current page index
function updateArrows() {
  leftArrow.style.display = currentPageIndex === 0 ? 'none' : 'block';
  rightArrow.style.display = currentPageIndex === totalPages - 1 ? 'none' : 'block';
}

// Add click event listeners for arrows
rightArrow.addEventListener('click', () => scrollToPage('right'));
leftArrow.addEventListener('click', () => scrollToPage('left'));

// Initialize arrow visibility
updateArrows();

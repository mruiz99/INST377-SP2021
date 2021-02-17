const carouselImages = document.querySelector('.gallery');
const carouselButtons = document.querySelectorAll('.arrow');
const numberOfImages = document.querySelectorAll('.gallery img').length;  
let imageIndex = 1;
let translateX = 0;
carouselButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'prev') {
      if (imageIndex !== 1) {
        imageIndex -= 3;
        translateX += 297;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex += 3;
        translateX -= 297;
      }
    }
    carouselImages.style.transform = `translateX(${translateX}px)`;
    });
  });
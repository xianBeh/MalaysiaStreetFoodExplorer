/*carousel buttons*/
const menu = document.querySelector('.menu-items');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

rightBtn.addEventListener('click', () => {
  menu.scrollBy({ left: 1000, behavior: 'smooth' }); 
});

leftBtn.addEventListener('click', () => {
  menu.scrollBy({ left: -1000, behavior: 'smooth' }); 
});

/*slideshow*/
const images = ["slideshowimg/slideshow1.jpg", "slideshowimg/slideshow2.jpg", "slideshowimg/slideshow3.jpg", "slideshowimg/slideshow4.jpg"]; 

let index = 0; 
const slideshow = document.getElementById("slideshow");

// Change image every 3 seconds
setInterval(() => {
  index = (index + 1) % images.length;  // loop back to first image
  slideshow.src = images[index];
}, 3000);
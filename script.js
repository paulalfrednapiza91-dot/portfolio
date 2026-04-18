// 1. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// 2. Automated Image Slider
const wrapper = document.getElementById('sliderWrapper');
const images = document.querySelectorAll('#sliderWrapper img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;

function showImage() {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    wrapper.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    showImage();
});

prevBtn.addEventListener('click', () => {
    index--;
    showImage();
});

// Auto-slide every 4 seconds
setInterval(() => {
    index++;
    showImage();
}, 4000);
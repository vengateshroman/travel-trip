const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideIndicators = document.querySelector('.slide-indicators');
let isDown = false;
let startX;
let scrollLeft;
let activeSlideIndex = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

function slide(direction) {
  const cardWidth = slider.firstElementChild.offsetWidth;
  if (direction === 'left') {
    activeSlideIndex = activeSlideIndex > 0 ? activeSlideIndex - 1 : 0;
    slider.scrollLeft -= cardWidth;
  } else if (direction === 'right') {
    activeSlideIndex = activeSlideIndex < slider.childElementCount - 1 ? activeSlideIndex + 1 : slider.childElementCount - 1;
    slider.scrollLeft += cardWidth;
  }
  updateSlideIndicator();
}

function createSlideIndicators() {
  for (let i = 0; i < slider.childElementCount; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    if (i === activeSlideIndex) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => {
      activeSlideIndex = i;
      const cardWidth = slider.firstElementChild.offsetWidth;
      slider.scrollLeft = cardWidth * i;
      updateSlideIndicator();
    });
    slideIndicators.appendChild(indicator);
  }
}

function updateSlideIndicator() {
  const indicators = document.querySelectorAll('.slide-indicator');
  indicators.forEach((indicator, index) => {
    if (index === activeSlideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

createSlideIndicators();
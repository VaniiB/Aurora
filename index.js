
const dotContainer = document.querySelector('.slider-dots');


for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    if (i === 0) {
        dot.classList.add('active'); 
    }
    dot.addEventListener('click', () => {
        goToSlide(i);
    });
    dotContainer.appendChild(dot);
}

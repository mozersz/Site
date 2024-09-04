let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrossel-item');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel-inner').style.transform = `translateX(${offset}%)`;
}
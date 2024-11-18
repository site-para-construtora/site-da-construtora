let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

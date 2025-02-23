let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel-1 .slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -100 * currentIndex;
    document.querySelector('#carousel-1 .carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// SWIPE functionality >>>> 

const carouselInner = document.querySelector('#carousel-1 .carousel-inner');

carouselInner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Record where the touch starts
});

carouselInner.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Record the touch's movement
});

carouselInner.addEventListener('touchend', () => {
    if (startX - endX > 50) {
        // Swipe left: next slide
        nextSlide();
    if (Math.abs(startX - endX) > 50) {
        if (startX - endX > 0) {
                nextSlide();
        } else {
                prevSlide();
            }
        }
    } else if (endX - startX > 50) {
        // Swipe right: previous slide
        prevSlide();
    }
});

// Initialize the carousel
showSlide(currentIndex);
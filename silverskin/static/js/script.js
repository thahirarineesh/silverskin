let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Show the active slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Function for next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function for previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Automatically move to the next slide every 3 seconds
let slideInterval = setInterval(nextSlide, 6000);  // Changed to 3000ms (3 seconds)

// Stop auto-sliding when user clicks next or prev
function stopAutoSlide() {
    clearInterval(slideInterval);  // Stop the current interval
    slideInterval = setInterval(nextSlide, 6000); // Restart auto-sliding after 3 seconds
}

// Attach event listeners to buttons to stop auto-slide when clicked
document.querySelector('.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.next').addEventListener('click', stopAutoSlide);

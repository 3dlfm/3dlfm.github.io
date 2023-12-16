document.addEventListener('DOMContentLoaded', function () {
    // Simple carousel logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel .item');
    const totalSlides = slides.length;
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    // Initialize the carousel
    showSlide(currentSlide);
  
    // Set interval for auto-slide
    setInterval(nextSlide, 3000); // 3000ms = 3 seconds per slide
  });
  
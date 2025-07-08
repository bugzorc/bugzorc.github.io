document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.projectImage');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });
    
    projectImages.forEach(image => {
      observer.observe(image);
    });
});
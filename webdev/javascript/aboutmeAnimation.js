document.addEventListener('DOMContentLoaded', function() {
    const aboutMeSection = document.querySelector('.aboutme');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(aboutMeSection);
});
document.addEventListener("DOMContentLoaded", () => {
    const hireMeBtn = document.querySelector('.hireme');
    const contactForm = document.querySelector('.contactmeForm');

    if (hireMeBtn) {
      hireMeBtn.addEventListener('click', () => {
        // Scroll to bottom smoothly
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

        // Wait until scroll finishes (adjust timing if needed)
        setTimeout(() => {
          // Add glow class after scroll completes
          if (contactForm) {
            contactForm.classList.add('glow-effect');

            // Remove the glow after 1 second
            setTimeout(() => {
              contactForm.classList.remove('glow-effect');
            }, 1000);
          }
        }, 550); // Delay should match scroll speed
      });
    }
});
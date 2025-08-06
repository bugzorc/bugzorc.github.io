document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hireme").addEventListener("click", function () {
      // Scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });

      // Wait 2 seconds, then apply glow
      setTimeout(() => {
        const form = document.getElementById("contactForm");
        form.style.boxShadow = "0 0 10px 5px #803cfc"; // Glow color
        form.style.transition = "box-shadow 0.5s ease-in-out";

        // Remove glow after 3 seconds
        setTimeout(() => {
          form.style.boxShadow = "none";
        }, 1000);
      }, 500);
    });
});
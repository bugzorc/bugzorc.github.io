document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);
      if (targetId === "#contact") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
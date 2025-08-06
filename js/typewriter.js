document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter");

  const messages = [
    "Hire me...🤞",
    "Get it done...💨",
    "high quality🎁"
  ];

  let msgIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const current = messages[msgIndex];

    if (typing) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        typing = false;
        setTimeout(typeLoop, 1500); // pause before deleting
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        msgIndex = (msgIndex + 1) % messages.length;
      }
    }

    setTimeout(typeLoop, typing ? 100 : 50); // typing/delays
  }

  typeLoop();
});
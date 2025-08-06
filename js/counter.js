document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("counter");
  let count = 0;
  const interval = setInterval(() => {
    if (count <= 34) {
      span.textContent = count.toString().padStart(2, '0');
      count++;
    } else {
      clearInterval(interval);
      span.classList.add("sparkle");
    }
  }, 100); // adjust speed
});
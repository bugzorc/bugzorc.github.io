document.addEventListener("DOMContentLoaded", () => {
    const whoamiSpan = document.getElementById("whoami");
    const cursorSpan = document.getElementById("cursor");
  
    const jobs = [
      "Multiplayer Systems Spc",
      "Unreal Engine Spc",
      "C++ Developer",
      "سُبْحَانَ ٱللّٰهِ"
    ];
  
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let speed = 100;
  
    function type() {
      const job = jobs[i % jobs.length];
      const prefix = `<span class="dollar">$</span> <span class="whoami">whoami</span>: `;
  
      if (!isDeleting) {
        whoamiSpan.innerHTML = prefix + job.substring(0, j);
        cursorSpan.style.display = "inline-block";
      } else {
        whoamiSpan.innerHTML = prefix + job.substring(0, j) + "_";
        cursorSpan.style.display = "none";
      }
  
      if (!isDeleting && j === job.length) {
        setTimeout(() => {
          isDeleting = true;
          speed = 25;
        }, 2500);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        speed = 100;
        setTimeout(() => {
          speed = 100;
        }, 500);
      }
  
      j += isDeleting ? -1 : 1;
  
      setTimeout(type, speed);
    }
  
    type();
  });
  
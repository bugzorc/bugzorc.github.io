document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const playButton = document.getElementById("play-btn");
    const links = [
        "https://link1.com",
        "https://link2.com",
        "https://link3.com",
        "https://link4.com",
        "https://link5.com"
    ];

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        playButton.href = links[currentIndex];
    }

    window.moveSlide = function (direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlider();
    }

    setInterval(() => moveSlide(1), 3000); // Auto-slide every 3 seconds
});

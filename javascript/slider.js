document.addEventListener("DOMContentLoaded", () => {
    const sliderContainers = document.querySelectorAll(".slider-container");

    sliderContainers.forEach((container) => {
        let currentIndex = 0;
        const slides = container.querySelectorAll(".slide");
        const slider = container.querySelector(".slider");
        const playButton = container.querySelector(".play-btn");

        const links = [
            "https://link1.com",
            "https://link2.com",
            "https://link3.com",
            "https://link4.com",
            "https://link5.com"
        ];

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            if (playButton) {
                playButton.href = links[currentIndex];
            }
        }

        // Create unique moveSlide function for this container
        container.querySelector(".prev")?.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        container.querySelector(".next")?.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }, 3000);

        updateSlider(); // Initialize on load
    });
});

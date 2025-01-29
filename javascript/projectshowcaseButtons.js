document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelectorAll('.slideprojects > div');
    const leftButton = document.querySelector('.button-nav-img:first-child');
    const rightButton = document.querySelector('.button-nav-img:last-child');
    let currentIndex = 0;

    // Function to show slider items based on screen size
    function showSliderItems(startIndex) {
        const isMobile = window.innerWidth <= 768; // Check if the screen is mobile

        sliderItems.forEach((item, i) => {
            if (isMobile) {
                // Mobile: Show only one item at a time
                item.style.display = i === startIndex ? 'block' : 'none';
            } else {
                // Desktop: Show two items at a time
                item.style.display = i === startIndex || i === startIndex + 1 ? 'block' : 'none';
            }
        });
    }

    // Initialize to show the first item(s)
    showSliderItems(currentIndex);

    // Left button click event
    leftButton.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 768;
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : (isMobile ? sliderItems.length - 1 : sliderItems.length - 2);
        showSliderItems(currentIndex);
    });

    // Right button click event
    rightButton.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 768;
        currentIndex = (currentIndex < (isMobile ? sliderItems.length - 1 : sliderItems.length - 2)) ? currentIndex + 1 : 0;
        showSliderItems(currentIndex);
    });

    // Update layout on window resize
    window.addEventListener('resize', function () {
        showSliderItems(currentIndex);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.showcaseSpace > .projectCont');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    let currentIndex = 0;

    function showProjects(startIndex) {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 3;

        projectItems.forEach((item, i) => {
            item.style.display = (i >= startIndex && i < startIndex + visibleCount) ? 'block' : 'none';
        });
    }

    function updateRight() {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 3;
        const maxStartIndex = projectItems.length - visibleCount;

        if (currentIndex >= maxStartIndex) {
            currentIndex = 0; // Reset to beginning if at end
        } else {
            currentIndex += 1;
        }
        showProjects(currentIndex);
    }

    function updateLeft() {
        if (currentIndex <= 0) {
            currentIndex = 0; // Stay at start
        } else {
            currentIndex -= 1;
        }
        showProjects(currentIndex);
    }

    leftButton.addEventListener('click', updateLeft);
    rightButton.addEventListener('click', updateRight);
    window.addEventListener('resize', () => showProjects(currentIndex));

    showProjects(currentIndex); // Initial show
});

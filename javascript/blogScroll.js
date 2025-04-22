document.addEventListener('DOMContentLoaded', function () {
    const blogItems = document.querySelectorAll('.showcaseSpace > .blog');
    const leftButton = document.getElementById('leftButton3');
    const rightButton = document.getElementById('rightButton3');
    let currentIndex = 0;

    function showBlogs(startIndex) {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 2; // show 1 on mobile, 2 on desktop

        blogItems.forEach((item, i) => {
            item.style.display = (i >= startIndex && i < startIndex + visibleCount) ? 'block' : 'none';
        });
    }

    function updateRight() {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 2;
        const maxStartIndex = blogItems.length - visibleCount;

        if (currentIndex >= maxStartIndex) {
            currentIndex = 0; // Reset to beginning
        } else {
            currentIndex += 1;
        }
        showBlogs(currentIndex);
    }

    function updateLeft() {
        if (currentIndex <= 0) {
            currentIndex = 0; // Stay at beginning
        } else {
            currentIndex -= 1;
        }
        showBlogs(currentIndex);
    }

    leftButton.addEventListener('click', updateLeft);
    rightButton.addEventListener('click', updateRight);
    window.addEventListener('resize', () => showBlogs(currentIndex));

    showBlogs(currentIndex); // Initial display
});
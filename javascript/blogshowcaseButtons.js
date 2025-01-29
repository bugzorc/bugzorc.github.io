document.addEventListener('DOMContentLoaded', function () {
    const blogColumns = document.querySelectorAll('.slideblog > div'); // Select all blog columns
    const leftButton = document.querySelector('.button-nav-img-blog:first-child');
    const rightButton = document.querySelector('.button-nav-img-blog:last-child');
    let currentIndex = 0;

    // Function to show columns based on screen size
    function showBlogColumns(startIndex) {
        const isMobile = window.innerWidth <= 768; // Check if the screen is mobile

        blogColumns.forEach((column, i) => {
            if (isMobile) {
                // Mobile: Show only one column at a time
                column.style.display = i === startIndex ? 'block' : 'none';
            } else {
                // Desktop: Show three columns at a time
                column.style.display = i >= startIndex && i < startIndex + 3 ? 'block' : 'none';
            }
        });
    }

    // Initialize to show the first column(s)
    showBlogColumns(currentIndex);

    // Left button click event
    leftButton.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 768;
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : (isMobile ? blogColumns.length - 1 : blogColumns.length - 3);
        showBlogColumns(currentIndex);
    });

    // Right button click event
    rightButton.addEventListener('click', function () {
        const isMobile = window.innerWidth <= 768;
        currentIndex = (currentIndex < (isMobile ? blogColumns.length - 1 : blogColumns.length - 3)) ? currentIndex + 1 : 0;
        showBlogColumns(currentIndex);
    });

    // Update layout on window resize
    window.addEventListener('resize', function () {
        showBlogColumns(currentIndex);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Map nav text to blog data-category values
    const categoryMap = {
        'All': 'all',
        'Unreal Engine': 'ue',
        'C++ Programming': 'cpp',
        'Blender': 'blender',
        'Low Level Stuff': 'low',
        'Others': 'others'
    };

    function showCategory(categoryText) {
        const blogs = document.querySelectorAll('.blogCont');
        const category = categoryMap[categoryText] || ''; // fallback to empty string

        blogs.forEach(function (blog) {
            const blogCategory = blog.getAttribute('data-category');
            if (category === 'all' || blogCategory === category) {
                blog.style.display = 'flex';
            } else {
                blog.style.display = 'none';
            }
        });
    }

    const navItems = document.querySelectorAll('.blogHubNavBars');
    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            const categoryText = this.querySelector('.blogHubNavBar p').textContent.trim();
            showCategory(categoryText);
        });
    });
});
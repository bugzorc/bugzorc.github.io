document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fileParam = urlParams.get('file');
    const dateParam = urlParams.get('date');

    // Set the page title
    if (fileParam) {
        document.title = `💾/${fileParam}`;
    }

    // Set the date
    if (dateParam) {
        const dateElement = document.getElementById('date');
        if (dateElement) {
            dateElement.textContent = dateParam;
        }
    }

    // Load blog content
    if (fileParam) {
        const fileURL = `database/blogs/${fileParam}.html`;

        fetch(fileURL)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(htmlContent => {
                const blogContentDiv = document.querySelector('.blogContent');
                blogContentDiv.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('There was a problem fetching the blog content:', error);
            });
    }
});

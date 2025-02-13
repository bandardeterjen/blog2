document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Fetch data from the database.txt file
    fetch('database.txt')
        .then(response => response.text())
        .then(data => {
            // Split the data into individual posts
            const posts = data.split('---'); // Each post is separated by '---'

            posts.forEach(post => {
                if (post.trim() !== '') {
                    const [title, content] = post.split('\n').map(line => line.trim());
                    
                    // Create a new article element
                    const article = document.createElement('article');
                    article.innerHTML = `
                        <h2>${title}</h2>
                        <p>${content}</p>
                    `;
                    
                    // Append the article to the blog posts container
                    blogPostsContainer.appendChild(article);
                }
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});

// Define the backButton and add functionality to redirect to the home page when clicked 
const backButton = document.querySelector('#backBtn');

backButton.addEventListener('click', function (event) {
    // redirect to the home page
    window.location.href = "./index.html";
});

// Retrieve the blogs array from local storage
var blogs = JSON.parse(localStorage.getItem('blogs'));

// Check if the blogs array exists in local storage
if (blogs && Array.isArray(blogs)) {
    // Loop through each blog item
    blogs.forEach(function(blog) {
        // Create a div element for each blog
        var div = document.createElement('div');
        div.classList.add('blog-container');

        // Create a title (h2)
        var title = document.createElement('h2');
        title.textContent = blog.blogTitle;
        title.classList.add('blog-h2')
        
        // Create a paragraph
        var paragraph = document.createElement('p');
        paragraph.textContent = blog.blogContent;
        paragraph.classList.add('blog-p')


        // Create a footer
        var footer = document.createElement('footer');
        var createdBy = document.createElement('span');
        createdBy.textContent = `Created by: ${blog.userName}`;
        footer.appendChild(createdBy);
        footer.classList.add('blog-footer')
        
        // Append title, paragraph, and footer to the div
        div.appendChild(title);
        div.appendChild(paragraph);
        div.appendChild(footer);
        
        // Append the div to the document body
        document.body.appendChild(div);
    });
} else {
    console.log("Blogs array not found in local storage or not an array.");
}
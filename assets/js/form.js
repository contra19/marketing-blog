// Define blog button and add functionality to redirect to blog page
const blogButton = document.querySelector('#blogBtn');

blogButton.addEventListener('click', function (event) {
    // redirect to the home page
window.location.href = "./blog.html";
});


// Get user input from form 
const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#blog-title');
const blogContentInput = document.querySelector('#blog-content');
const submitBlogButton = document.querySelector('#submitBtn');

// Define submit button functionality
submitBlogButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Set variables for user inputs
    const userName = userNameInput.value.trim();
    const blogTitle = blogTitleInput.value.trim();
    const blogContent = blogContentInput.value.trim();

    // validate that all fields have data and stop execution if any required field is empty
    if (!userName) {
        alert("Username, Blog Title, and Blog Content are REQUIRED!\nPlease fill in Username to continue.");
        return;
    } else if (!blogTitle) {
        alert("Username, Blog Title, and Blog Content are REQUIRED!\nPlease fill in Blog Title to continue.");
        return;
    } else if (!blogContent) {
        alert("Username, Blog Title, and Blog Content are REQUIRED!\nPlease fill in Blog Content to continue.");
        return;
    }

    // build the blog object
    const blogObj = {
    userName: userNameInput.value,
    blogTitle: blogTitleInput.value,
    blogContent: blogContentInput.value,
    }
    
   // get the current blog object(S) from localStorage
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    
    // check if blogs exist, if not set blogs to the blog object
    if (blogs) {
        blogs.push(blogObj);
    }
    else {
        blogs = [blogObj]
    }

    // store the array of blog objects to localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
    
    // redirect to the blog page
    window.location.href = "blog.html";
});
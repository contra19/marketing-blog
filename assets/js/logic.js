// Define Light/Dark mode button and add functionality 
const modeSwitch = document.getElementById('lightDarkBtn');

// Function to toggle between dark and light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    // Toggle button text
    modeSwitch.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Add event listener for click event on modeSwitch
modeSwitch.addEventListener('click', toggleMode);

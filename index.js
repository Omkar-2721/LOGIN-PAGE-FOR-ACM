// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form elements
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Simulate a successful login
    alert('Login successful!');
    // Here you can add your form submission code or AJAX request to submit the form data to the server
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

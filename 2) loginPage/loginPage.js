document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example validation logic
    if (email === 'test@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to the dashboard page or other app section
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

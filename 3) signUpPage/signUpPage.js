document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Example: Save user data (in a real app, you'd send this to your backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Show success message or redirect
    alert('Sign-up successful! You can now login.');
    window.location.href = 'login.html'; // Redirect to login page after sign up
});

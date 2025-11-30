document.addEventListener('DOMContentLoaded', function() {
    // 1. Form Selection and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent default form submission to the server
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // --- 4. Validation Logic ---

        // Username Validation: Check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Check if it includes both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // Password Validation: Ensure length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }
        
        // --- 5. Displaying Feedback ---

        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success Message
            feedbackDiv.textContent = "Registration successful! Data can now be submitted.";
            // Success styling
            feedbackDiv.style.color = '#155724'; /* Dark green text */
            feedbackDiv.style.backgroundColor = '#d4edda'; /* Light green background */

            // OPTIONAL: Clear the form after a successful registration
            // form.reset();

        } else {
            // Error Messages
            // Join the messages array with <br> to display each error on a new line
            feedbackDiv.innerHTML = messages.join('<br>'); 
            // Error styling (default styles are for errors, but reset in case of success before)
            feedbackDiv.style.color = '#d8000c';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
    });
});
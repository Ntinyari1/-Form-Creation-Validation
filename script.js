document.addEventListener('DOMContentLoaded', function() {
    // 1. Setup and Initial Code Structure
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        // Prevent default form submission to the server
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 4. Validation Logic
        let isValid = true;
        const messages = [];

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
        
        // 5. Displaying Feedback

        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success Message Logic
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745'; // Required success color
            // Also reset background color for better visibility if previously error
            feedbackDiv.style.backgroundColor = '#d4edda'; 

        } else {
            // Error Messages Logic
            // Join messages with <br> and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>'); 
            
            // Required error color
            feedbackDiv.style.color = '#dc3545'; 
            
            // Ensure background color matches the initial CSS error style for consistency
            feedbackDiv.style.backgroundColor = '#ffbaba'; 
        }
    });
});
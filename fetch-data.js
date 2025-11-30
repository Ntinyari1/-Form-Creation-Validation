// 1. Initialize the Async Function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch
    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Check for non-successful HTTP status codes (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response body to JSON
        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            // Create a list item
            const listItem = document.createElement('li');
            
            // Set the text content to the user's name
            listItem.textContent = user.name;
            
            // Append the list item to the unordered list
            userList.appendChild(listItem);
        });

        // Append the completed list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling
        console.error('Error fetching data:', error);
        
        // Clear existing content and display an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.style.color = 'red';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
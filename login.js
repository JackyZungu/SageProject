document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    function authenticateUser(email, password) {
        const savedData = localStorage.getItem('formData');

        if (savedData) {
            const parsedData = JSON.parse(savedData);

            if (email === parsedData.email && password === parsedData.password) {
                return true; 
            }
        }

        return false; 
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (authenticateUser(email, password)) {
            alert('Login successful!');
            window.location.href = 'index.html'; 
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});

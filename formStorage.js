document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById('firstNameInput');
    const secondNameInput = document.getElementById('secondNameInput');
    const emailInput = document.getElementById('emailInput');
    const telephoneInput = document.getElementById('telephoneInput');
    const passwordInput = document.getElementById('passwordInput');
    const newsletterYes = document.getElementById('newsletterYes');
    const submitButton = document.getElementById('submitButton');

    function saveFormData() {
        const formData = {
            firstName: firstNameInput.value,
            secondName: secondNameInput.value,
            email: emailInput.value,
            telephone: telephoneInput.value,
            password: passwordInput.value,
            newsletter: newsletterYes.checked ? 'Yes' : 'No'
        };

        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem('formData');

        if (savedData) {
            const parsedData = JSON.parse(savedData);
            firstNameInput.value = parsedData.firstName || '';
            secondNameInput.value = parsedData.secondName || '';
            emailInput.value = parsedData.email || '';
            telephoneInput.value = parsedData.telephone || '';
            passwordInput.value = parsedData.password || '';

            if (parsedData.newsletter === 'Yes') {
                newsletterYes.checked = true;
            }
        }
    }

    loadFormData();

    submitButton.addEventListener('click', saveFormData);

    function saveFormData() {
        const formData = {
            firstName: firstNameInput.value,
            secondName: secondNameInput.value,
            email: emailInput.value,
            telephone: telephoneInput.value,
            password: passwordInput.value,
            newsletter: newsletterYes.checked ? 'Yes' : 'No'
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to index.html after saving form data
        window.location.href = 'signIn.html';
    }
});

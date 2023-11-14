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

        window.location.href = 'signIn.html';
    }
  
    submitButton.addEventListener('click', saveFormData);
});

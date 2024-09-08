let =  form = document.querySelector('form');
let= firstNameInput = document.getElementById('firstname');
let = lastNameInput = document.getElementById('lastname');
let =  emailInput = document.getElementById('email');
let = passwordInput = document.getElementById('number');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const requiredFields = [firstNameInput, lastNameInput, emailInput, passwordInput];
    const isAllFieldsFilled = requiredFields.every(field => field.value);

    if (!isAllFieldsFilled || !isValidEmail(emailInput.value)) {
        alert('Por favor, preencha todos os campos obrigatórios e insira um endereço de e-mail válido.');
        return;
    }

    // Se todas as validações passarem, envie o formulário
    alert('Formulário enviado com sucesso! Ola meu nome é Sophia Akemi');
});
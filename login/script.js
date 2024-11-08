// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');

    // Validação básica
    if (!email || !senha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos!';
    } else if (!isValidEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido!';
    } else {
        errorMessage.textContent = '';
        // Aqui você pode fazer a lógica para enviar os dados para o servidor
        alert('Login realizado com sucesso!');
    }
});

// Função para validar o formato do email
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

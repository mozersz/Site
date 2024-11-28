document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para verificar o usuário e a senha
    // Por enquanto, faremos uma verificação simples para fins de demonstração

    if (username === 'joab' && password === '123') {
        window.location.href = 'http://127.0.0.1:5500/html/TelaInicial.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos';
    }
});

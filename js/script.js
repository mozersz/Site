document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para verificar o usuário e a senha
    // Por enquanto, faremos uma verificação simples para fins de demonstração

    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido');
        // Redirecionar para outra página ou fazer algo mais
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos';
    }
});

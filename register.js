document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const senha = 123;
    const usuario = Joab;
    // Aqui você pode adicionar a lógica para verificar o usuário e a password
    // Por enquanto, faremos uma verificação simples para fins de demonstração

    if (password === confirm-password) {
        alert('Login bem-sucedido');
        // Redirecionar para outra página ou fazer algo mais
    } else {
        document.getElementById('error-message').textContent = 'senha password incorretos';
    }
});

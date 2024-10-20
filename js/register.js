document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;

    // Aqui você pode adicionar a lógica para verificar o usuário e a password
    // Por enquanto, faremos uma verificação simples para fins de demonstração

    if (password === confirmpassword) {
        window.location.href = "TelaInicial.html";
    } else {
        document.getElementById('error-message').textContent = 'As senha não coincidem';
    }
});

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    showError('Por favor, preencha todos os campos.');
  } else if (!validateEmail(email)) {
    showError('Por favor, insira um email válido.');
  } else {
    showError(''); // Limpa a mensagem de erro
    alert('Login bem-sucedido!'); // Simulação de sucesso
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = message ? 'block' : 'none';
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


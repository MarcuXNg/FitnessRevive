const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// redirect to sign-up
registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

// redirect to sign-in
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

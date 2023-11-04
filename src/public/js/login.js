const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});


function checkPasswordLength() {
  const minLength = 8; // Define the minimum password length
  const maxLength = 25; // Define the maximum password length
}

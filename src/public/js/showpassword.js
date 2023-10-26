const showPassword = document.querySelector('#show-password');
const passwordField = document.querySelector('#password');

showPassword.addEventListener('click', function() {
  const iconclass = showPassword.getAttribute('class') === 'fa-solid fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  showPassword.setAttribute('class', iconclass);
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
});

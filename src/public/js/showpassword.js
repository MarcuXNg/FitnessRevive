const showSignUpPassword = document.querySelector('#show-password');
const SignUpPasswordField = document.querySelector('#signupPassword');

const showConfirmPassword = document.querySelector('#show-confirmpassword');
const confirmpasswordField = document.querySelector('#confirmPassword');

showSignUpPassword.addEventListener('click', function() {
  const iconclass = showSignUpPassword.getAttribute('class') === 'fa-solid fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  showSignUpPassword.setAttribute('class', iconclass);
  const type = SignUpPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  SignUpPasswordField.setAttribute('type', type);
});

showConfirmPassword.addEventListener('click', function() {
  const iconclass = showConfirmPassword.getAttribute('class') === 'fa-solid fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  showConfirmPassword.setAttribute('class', iconclass);
  const type = confirmpasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  confirmpasswordField.setAttribute('type', type);
});


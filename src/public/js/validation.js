// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          const firstname = form.querySelector('#Firstname');
          const lastname = form.querySelector('#Lastname');
          const gmail = form.querySelector('#SignUpEmail');
          const password = form.querySelector('#signupPassword'); // Select the signupPassword input
          const confirmPassword = form.querySelector('#confirmPassword'); // Select the confirmPassword input
          firstname.classList.add('is-invalid');
          lastname.classList.add('is-invalid');
          gmail.classList.add('is-invalid');
          password.classList.add('is-invalid');
          confirmPassword.classList.add('is-invalid');
          event.preventDefault();
          event.stopPropagation();
        }
        // form.classList.add('was-validated');
      }, false);
    });
  }, false);

  // Validation Check before Submit
  addEventListener('DOMContentLoaded', (event) => {
    const firstname = document.getElementById('Firstname');
    const firstnameAlert = document.getElementById('firstname-alert');

    const lastname = document.getElementById('Lastname');
    const lastnameAlert = document.getElementById('lastname-alert');

    const gmail = document.getElementById('SignUpEmail');
    const gmailAlert = document.getElementById('gmail-alert');

    const password = document.getElementById('signupPassword');
    const passwordAlert = document.getElementById('password-alert');

    const confirmPass = document.getElementById('confirmPassword');
    const confirmAlert = document.getElementById('passwordMatch');

    // firstname on click
    firstname.addEventListener('focus', () => {
      firstnameAlert.classList.remove('d-none');
      if (!firstname.classList.contains('is-valid')) {
        firstname.classList.add('is-invalid');
      }
    });

    // lastname on click
    lastname.addEventListener('focus', () => {
      lastnameAlert.classList.remove('d-none');
      if (!lastname.classList.contains('is-valid')) {
        lastname.classList.add('is-invalid');
      }
    });

    // gmail on click
    gmail.addEventListener('focus', () => {
      gmailAlert.classList.remove('d-none');
      if (!gmail.classList.contains('is-valid')) {
        gmail.classList.add('is-invalid');
      }
    });

    // password on click
    password.addEventListener('focus', () => {
      passwordAlert.classList.remove('d-none');
      if (!password.classList.contains('is-valid')) {
        password.classList.add('is-invalid');
      }
    });

    // confirm pass click-in
    confirmPass.addEventListener('focus', () => {
      confirmAlert.classList.remove('d-none');
      if (!confirmPass.classList.contains('is-valid')) {
        confirmPass.classList.add('is-invalid');
      }
    });

    firstname.addEventListener('input', () => {
      const value = firstname.value;
      const firstnameInput = value.length >=1;
      if (firstnameInput) {
        firstname.classList.remove('is-invalid');
        firstname.classList.add('is-valid');
      } else {
        firstname.classList.remove('is-valid');
        firstname.classList.add('is-invalid');
      }
    });

    lastname.addEventListener('input', () => {
      const value = lastname.value;
      const lastnameInput = value.length >=1;
      if (lastnameInput) {
        lastname.classList.remove('is-invalid');
        lastname.classList.add('is-valid');
      } else {
        lastname.classList.remove('is-valid');
        lastname.classList.add('is-invalid');
      }
    });

    // check gmail format
    gmail.addEventListener('input', () => {
      const value = gmail.value;
      const gmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

      if (gmailCheck) {
        gmail.classList.remove('is-invalid');
        gmail.classList.add('is-valid');
      } else {
        gmail.classList.remove('is-valid');
        gmail.classList.add('is-invalid');
      }
    });

    // check password requirements
    password.addEventListener('input', () => {
      const value = password.value;
      const isLengthValid = value.length >= 8;
      const lengthMax = value.length <= 25;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar && hasLowerCase && lengthMax;

      if (isPasswordValid) {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
      } else {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
      }
    });

    // check password match
    confirmPass.addEventListener('input', () => {
      const password = document.getElementById('signupPassword');
      const passValue = password.value;
      const value = confirmPass.value;
      const isLengthValid = value.length >= 8;
      const lengthMax = value.length <= 25;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar && hasLowerCase && lengthMax;

      if (isPasswordValid && passValue == value) {
        confirmPass.classList.remove('is-invalid');
        confirmPass.classList.add('is-valid');
      } else {
        confirmPass.classList.remove('is-valid');
        confirmPass.classList.add('is-invalid');
      }
    });

    // first-name click-out
    firstname.addEventListener('blur', () => {
      firstnameAlert.classList.add('d-none');
    });

    // last-name click-out
    lastname.addEventListener('blur', () => {
      lastnameAlert.classList.add('d-none');
    });

    // email click-out
    gmail.addEventListener('blur', () => {
      gmailAlert.classList.add('d-none');
    });


    // password click-out
    password.addEventListener('blur', () => {
      passwordAlert.classList.add('d-none');
    });

    // confirm pass click-out
    confirmPass.addEventListener('blur', () => {
      confirmAlert.classList.add('d-none');
    });
  });
})();

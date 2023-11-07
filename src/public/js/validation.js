// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          // Access the invalid-tooltip div within the form
          const invalidTooltips = form.querySelectorAll('.invalid-tooltip');
          console.log(invalidTooltips);

          // set the invalid-tooltip hidden default = true
          invalidTooltips[0].hidden = 'true'; // Firstname
          invalidTooltips[1].hidden = 'true'; // Lastname
          invalidTooltips[2].hidden = 'true'; // Email
          invalidTooltips[3].hidden = 'true'; // Password
          invalidTooltips[4].hidden = 'true'; // Confirm Password
          invalidTooltips[5].hidden = 'true'; // Agree to terms

          // Find the input element by its ID
          const inputFirstnameSignUp = document.getElementById('Firstname');
          const inputLastnameSignUp = document.getElementById('Lastname');
          const inputGmailSignUp = document.getElementById('SignUpEmail');
          const inputPasswordSignUp = document.getElementById('signupPassword');
          const inputConfirmPasswordSignUp = document.getElementById('confirmPassword');

          // Invalid-toolip ID
          const lowercase = document.getElementById('lowercase');
          const capital = document.getElementById('capital');
          const number = document.getElementById('number');
          const minimum = document.getElementById('minimum');

          // Attach an event listener to the input element
          inputFirstnameSignUp.addEventListener('click', SignUpFirstnameShow);
          inputLastnameSignUp.addEventListener('click', SignUpLastnameShow);
          inputGmailSignUp.addEventListener('click', SignUpGmailShow);
          inputPasswordSignUp.addEventListener('click', SignUpPasswordShow);
          inputConfirmPasswordSignUp.addEventListener('click', SignUpConfirmPasswordShow);

          // function

          /** This is a description of the SignUpUsernameShow function. */
          function SignUpFirstnameShow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[0].hidden = false;
          }


          /** This is a description of the SignUpUsernameShow function. */
          function SignUpLastnameShow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[1].hidden = false;
          }

          /** This is a description of the SignUpGmailShow function. */
          function SignUpGmailShow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[2].hidden = false;
          }
          /** This is a description of the SignUpPasswordShow function. */
          function SignUpPasswordShow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[3].hidden = false;
          }

          /** This is a description of the SignUpConfirmPasswordShow function. */
          function SignUpConfirmPasswordShow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[4].hidden = false;
          }

          // document.addEventListener('click', function(ev) {
          //   const isClickInsideInput = inputFirstnameSignUp.contains(ev.target);

          //   // If the click is outside the input element, hide the tooltip
          //   if (!isClickInsideInput) {
          //     invalidTooltips[0].hidden = true;
          //   }
          // });

          // document.addEventListener('click', function(ev) {
          //   const isClickInsideInput = inputLastnameSignUp.contains(ev.target);

          //   // If the click is outside the input element, hide the tooltip
          //   if (!isClickInsideInput) {
          //     invalidTooltips[1].hidden = true;
          //   }
          // });

          // document.addEventListener('click', function(ev) {
          //   const isClickInsideInput = inputGmailSignUp.contains(ev.target);

          //   // If the click is outside the input element, hide the gmail validation
          //   if (!isClickInsideInput) {
          //     invalidTooltips[2].hidden = true;
          //   }
          // });

          // document.addEventListener('click', function(ev) {
          //   const isClickInsideInput = inputPasswordSignUp.contains(ev.target);

          //   // If the click is outside the input element, hide the tooltip
          //   if (!isClickInsideInput) {
          //     invalidTooltips[3].hidden = true;
          //   }
          // });

          // document.addEventListener('click', function(ev) {
          //   const isClickInsideInput = inputConfirmPasswordSignUp.contains(ev.target);

          //   // If the click is outside the input element, hide the tooltip
          //   if (!isClickInsideInput) {
          //     invalidTooltips[4].hidden = true;
          //   }
          // });

          // When the user starts to type something inside the password field
          // onkeyup method
          // inputPasswordSignUp.onkeyup = function() {
          //   // Validate lowercase letters
          //   const lowerCaseLetters = /[a-z]/g;
          //   if (inputPasswordSignUp.value.match(lowerCaseLetters)) {
          //     lowercase.classList.add('valid-feedback');
          //   } else {
          //     lowercase.classList.remove('valid-feedback');
          //   }

          //   // Validate capital letters
          //   const upperCaseLetters = /[A-Z]/g;
          //   if (inputPasswordSignUp.value.match(upperCaseLetters)) {
          //     capital.classList.add('valid-feedback');
          //   } else {
          //     capital.classList.remove('valid-feedback');
          //   }

          //   // Validate numbers
          //   const numbers = /[0-9]/g;
          //   if (inputPasswordSignUp.value.match(numbers)) {
          //     number.classList.add('valid-feedback');
          //   } else {
          //     number.classList.remove('valid-feedback');
          //   }

          //   // Validate length
          //   if (inputPasswordSignUp.value.length >= 8) {
          //     minimum.classList.add('valid-feedback');
          //   } else {
          //     minimum.classList.remove('valid-feedback');
          //   }
          // };

          form.classList.add('was-validated');
        },
        false,
    );
  });

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
    const leng = document.querySelector('.leng');
    const bigLetter = document.querySelector('.capital');
    const num = document.querySelector('.number');
    const specialChar = document.querySelector('.special-char');
    const lowercase = document.querySelector('.lowercase');

    const confirmPass = document.getElementById('confirmPassword');
    const confirmAlert = document.getElementById('passwordMatch');

    // firstname on click
    firstname.addEventListener('focus', () => {
      firstnameAlert.classList.remove('d-none');
      if (!firstname.classList.contains('is-valid')) {
        firstname.classList.add('is-invalid');
      }
    });

    // password on click
    lastname.addEventListener('focus', () => {
      lastnameAlert.classList.remove('d-none');
      if (!lastname.classList.contains('is-valid')) {
        lastname.classList.add('is-invalid');
      }
    });

    // password on click
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

    // check password requirements
    password.addEventListener('input', () => {
      const value = password.value;
      const isLengthValid = value.length >= 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar && hasLowerCase;

      // if leng > 8, the leng requirements disappear
      if (isLengthValid) {
        leng.classList.add('valid-feedback');
      } else {
        leng.classList.remove('valid-feedback');
      }

      // if it has UpperCase letter, the requirements disappear
      if (hasUpperCase) {
        bigLetter.classList.add('valid-feedback');
      } else {
        bigLetter.classList.remove('valid-feedback');
      }

      // if it has at least 1 number, the requirements disappear
      if (hasNumber) {
        num.classList.add('valid-feedback');
      } else {
        num.classList.remove('valid-feedback');
      }

      // if it has at least 1 special Character, the requirements disappear
      if (hasSpecialChar) {
        specialChar.classList.add('valid-feedback');
      } else {
        specialChar.classList.remove('valid-feedback');
      }

      // if it has at least 1 lowercase letter, the requirements disappear
      if (hasLowerCase) {
        lowercase.classList.add('valid-feedback');
      } else {
        lowercase.classList.remove('valid-feedback');
      }

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
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar && hasLowerCase;

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

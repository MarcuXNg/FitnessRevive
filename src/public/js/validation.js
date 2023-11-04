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
          invalidTooltips[0].hidden = 'true';

          // Find the input element by its ID
          const inputElement = document.getElementById('SignUpUsername');

          // Attach an event listener to the input element
          inputElement.addEventListener('click', clicktoshow);

          // Define the clicktoshow function
          /** This is a description of the clicktoshow function. */
          function clicktoshow() {
            const invalidTooltips = document.querySelectorAll('.invalid-tooltip');
            invalidTooltips[0].hidden = false;
          }

          document.addEventListener('click', function(ev) {
            const isClickInsideInput = inputElement.contains(ev.target);

            // If the click is outside the input element, hide the tooltip
            if (!isClickInsideInput) {
              invalidTooltips[0].hidden = true;
            }
          });

          form.classList.add('was-validated');
        },
        false,
    );
  });
})();

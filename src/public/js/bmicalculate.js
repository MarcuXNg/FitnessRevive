/** This is a description of the bmicalculate function. */
function bmicalculate() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const age = parseFloat(document.getElementById('age').value);

  const weightNoti = document.getElementById('weightNoti');
  const heightNoti = document.getElementById('heightNoti');
  const ageNoti = document.getElementById('ageNoti');

  // Reset notifications
  weightNoti.style.display = 'none';
  heightNoti.style.display = 'none';
  ageNoti.style.display = 'none';

  // Condition
  if (isNaN(weight)) {
  // Show the notification
    weightNoti.style.display = 'block';
  }

  if (isNaN(height)) {
  // Show the notification
    heightNoti.style.display = 'block';
  }

  if (isNaN(age)) {
  // Show the notification
    ageNoti.style.display = 'block';
  }

  if (isNaN(weight) && isNaN(height)) {
    // Show the notification
    weightNoti.style.display = 'block';
    heightNoti.style.display = 'block';
  }

  if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
    const heightInMeters = height / 100; // Convert height from centimeters to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    // bmi rounded number
    const RoundedBMI = bmi.toFixed();
    document.getElementById('heading4').innerHTML = `Your BMI is ${RoundedBMI}`;
  }
}

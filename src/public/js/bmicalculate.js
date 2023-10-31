/** This is a description of the bmicalculate function. */
async function bmicalculate() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const age = parseFloat(document.getElementById('age').value);

  const weightNoti = document.getElementById('weightNoti');
  const heightNoti = document.getElementById('heightNoti');
  const ageNoti = document.getElementById('ageNoti');

  const caution = document.getElementById('p3');
  const readmore = document.getElementById('read-more');

  const readmoredata = document.getElementById('readmore');

  // Reset notifications
  weightNoti.style.display = 'none';
  heightNoti.style.display = 'none';
  ageNoti.style.display = 'none';

  caution.style.display = 'none';
  readmore.style.display = 'none';

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
    // using api
    const options = {
      method: 'GET',
      url: 'https://mega-fitness-calculator1.p.rapidapi.com/bmi',
      params: {
        weight: weight,
        height: height,
      },
      headers: {
        'X-RapidAPI-Key': '901060d89fmsha223b879571e886p177850jsn48cdc00b964e',
        'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      document.getElementById('heading1').innerHTML = `Your BMI is`;
      // BMI rounded number
      document.getElementById('heading2').innerHTML = response.data.info.bmi.toFixed();
      const WeightStatus = document.getElementById('p1');
      WeightStatus.innerHTML = `Weight Status: ${response.data.info.health}`;
      const HealthyBMIRange = document.getElementById('p2');
      HealthyBMIRange.innerHTML = `Healthy BMI range: ${response.data.info.healthy_bmi_range}`;
      // exerciseDataElement.textContent = JSON.stringify(response.data, null, 2);
      // console.log(response.data);

      caution.style.display = 'block';
      readmore.style.display = 'block';
      readmoredata.style.display ='none';
      readmore.style.textContent ='Read more';
    } catch (error) {
      console.log(error);
    }
  }
}

/** This is a description of the readmore function. */
function readmore() {
  const readmore = document.getElementById('readmore');
  const readMoreButton = document.getElementById('read-more');

  if (readmore.style.display === 'none' || readmore.style.display === '') {
    readmore.style.display = 'block';
    readMoreButton.textContent = 'Read Less';
  } else {
    readmore.style.display = 'none';
    readMoreButton.textContent = 'Read More';
  }
}

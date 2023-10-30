const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  // params: {muscle: 'biceps'},
  headers: {
    'X-RapidAPI-Key': '901060d89fmsha223b879571e886p177850jsn48cdc00b964e',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  const exerciseDataElement = document.getElementById('nutrition-data');
  exerciseDataElement.textContent = JSON.stringify(response.data[0], null, 2);
  console.log(response.data);
} catch (error) {
  console.log(error);
}

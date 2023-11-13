const options = {
  method: 'GET',
  url: 'http://localhost:8080/api/tutorials',
};

try {
  const response = await axios.request(options);
  //   const userList = document.getElementById('test');

  // Assuming the response.data is an array of objects with user data
  const userData = Object.entries(response.data.userList);
  // console.log(userData);

  // Get the table body
  const tableBody = document.querySelector('tbody');

  // Iterate over the user data and create a row for each user
  userData.forEach(function(user, index) {
    console.log(user);
    const row = document.createElement('tr');

    // Add the index (index + 1) as the row number
    const indexCell = document.createElement('th');
    // indexCell.setAttribute('scope', 'row');
    indexCell.textContent = index + 1;
    row.appendChild(indexCell);

    // Add the index (index + 1) as the row number
    const idCell = document.createElement('th');
    // indexCell.setAttribute('scope', 'row');
    idCell.textContent = user[1].id;
    row.appendChild(idCell);

    // Add username data cells (from your API response)
    const nameCell = document.createElement('td');
    nameCell.textContent = user[1].userprofile.last_name + ' ' + user[1].userprofile.first_name; // Change 'name' to the actual property you want to display
    row.appendChild(nameCell);

    // Add email data cells (from your API response)
    const mailCell = document.createElement('td');
    mailCell.textContent = user[1].email; // Change 'email' to the actual property you want to display
    row.appendChild(mailCell);

    // Add JoinedAt data cells (from your API response)
    const joinedAtCell = document.createElement('td');
    joinedAtCell.textContent = user[1].createdAt; // Change 'email' to the actual property you want to display
    row.appendChild(joinedAtCell);

    // Add edit and delete buttons
    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-warning', 'me-2');
    editButton.textContent = 'Edit';

    const deleteForm = document.createElement('form');
    deleteForm.method = 'post';
    deleteForm.action = `http://localhost:8080/api/tutorials/delete-user/${user[1].id}`; // Replace with the actual delete endpoint

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.type = 'submit';
    deleteButton.textContent = 'Delete';
    deleteForm.style.display = 'inline';

    deleteForm.appendChild(deleteButton);

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteForm);

    row.appendChild(actionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });

//   userList.textContent = JSON.stringify(response.data.userList);
//   console.log(JSON.stringify(response.data.userList));
} catch (error) {
  console.log(error);
}


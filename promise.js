const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Error fetching data.');
      }
    }, 2000);  // Simulates a delay of 2 seconds
  });
  
  fetchData
    .then(data => console.log(data))  // Executes if resolved
    .catch(error => console.error(error))  // Executes if rejected
    .finally(() => console.log('Fetch operation completed.'));
  

    fetch('https://api.example.com/user-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: 1 })  // Send user ID in the request body
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(userData => {
          console.log('User Data:', userData);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
        fetchData
        .then(data => {
          console.log('Step 1:', data);
          return 'Processed data';  // Passes to the next .then()
        })
        .then(result => {
          console.log('Step 2:', result);
          return 'Final result';
        })
        .then(final => {
          console.log('Step 3:', final);
        })
        .catch(error => console.error('Error:', error));
      
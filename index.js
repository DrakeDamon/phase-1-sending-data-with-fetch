function submitData(name, email) {
  const url = "http://localhost:3000/users";
  const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({ name: name, email: email })
  };

  // Returning the fetch chain
  return fetch(url, configurationObject)
      .then(response => response.json())
      .then(data => {
          // Assuming you have a div with id="display" in your HTML to show the results
          document.getElementById("display").innerHTML = `New ID: ${data.id}`;
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById("display").innerHTML = `Failed to create user: ${error.message}`;
      });
}

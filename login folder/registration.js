


function addData() {
  var username = document.getElementById("username").value;
  var pass = document.getElementById("pwd").value;

  // Retrieve existing data from local storage
  var existingData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add new data to the array
  var newData = {
    userName: username,
    userPwd: pass
  };

  existingData.push(newData);

  // Save the updated array back to local storage
  localStorage.setItem("userData", JSON.stringify(existingData));
}

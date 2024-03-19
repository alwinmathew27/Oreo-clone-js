

function checkData() {
    var enterUsername = document.getElementById("username").value;
    var enterPass = document.getElementById("pwd").value;
  
    // GETTING DATA FROM LOCAL STORAGE 
    var userData = JSON.parse(localStorage.getItem('userData')) || [];
  
    var foundUser = userData.find(function(user) {
      return user.userName === enterUsername && user.userPwd === enterPass;
    });
  
    if (foundUser) {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  }
  
const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password")


const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const user = username.value;
  const address = email.value;
  const pass = password.value;
  const passCon = confirm_password.value;

  if (!user || !address || !pass || !passCon) {
    alert("Please fill in all fields.");
    return;
  }

  if (pass !== passCon) {
    alert("Passwords do not match.");
    return;
  }

  alert("Form successfully submitted!");
  form.reset();
});



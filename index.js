const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm_password = document.getElementById("comfirm_password")


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  if (!username || !email || !password || !confirm_password) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirm_password) {
    alert("Passwords do not match.");
    return;
  }

  alert("Form successfully submitted!");
  form.reset();
});

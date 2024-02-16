
document.addEventListener("DOMContentLoaded", init);
function init() {
  let darkModeStore = localStorage.getItem('dark-mode');

  if (darkModeStore === null) {
    localStorage.setItem("dark-mode", false);
  }
  if (darkModeStore === "true") {
    setDarkMode();
  } else {
    ;
  }

  let myButton = document.getElementById("mybtn");
  myButton.addEventListener("click", clickedDarkMode);

  const form = document.getElementById('form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    resultDiv.innerHTML = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name && !email && !password) {
      resultDiv.innerHTML = '<p class="error">All fields are empty!</p>';
    } else if (!name) {
      resultDiv.innerHTML = '<p class="error">Need a Name!</p>';
    } else if (!email) {
      resultDiv.innerHTML = '<p class="error">Need an Email!</p>';
    } else if (!password) {
      resultDiv.innerHTML = '<p class="error">Need a Password!</p>';
    } else if (!/[A-Z]/.test(password)) {
      resultDiv.innerHTML = '<p class="error">Password needs minimum 1 uppercase character!</p>';
    } else if (!/[a-z]/.test(password)) {
      resultDiv.innerHTML = '<p class="error">Password needs minimum 1 lowercase character!</p>'; 
    } else if (!/[\d]/.test(password)) {
      resultDiv.innerHTML = '<p class="error">Password needs minimum 1 numeric digit!</p>'; 
    } else if (password.length >= 1 & password.length < 6) {
      resultDiv.innerHTML = '<p class="error">Password needs to be minimum 6 characters!</p>';
    } else {
      resultDiv.innerHTML = '<p>Successful Registration!</p>';
    }
  });

  let checkBox = document.getElementById("checkbox");
  checkBox.addEventListener("click", showPasswordBox);
}

function showPasswordBox(e) {
let passwordBox = document.getElementById("password");
if (e.target.checked) {
  passwordBox.type = "text";
} else {
  passwordBox.type = "password";
}
}

function clickedDarkMode() {
  toggleDarkMode();
  setDarkMode();
}

function setDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleDarkMode() {
  if (localStorage.getItem("dark-mode") === "true") {
    localStorage.setItem("dark-mode", false);

  } else {
    localStorage.setItem("dark-mode", true);
  }
}

function upDate(previewPic) {
  old = document.getElementById("image").innerHTML
  document.getElementById("image").innerHTML = previewPic.alt
  document.getElementById("image").style.background = "url(" + previewPic.src + ")";
}

function unDo() {
  document.getElementById("image").innerHTML = old
  document.getElementById("image").style.background = "slategrey";
}
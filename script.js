
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

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      resultDiv.innerHTML = '';

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!name && !email && !password) {
        resultDiv.innerHTML = '<p class="error">All fields are required.</p>';
      } else if (!name) {
        resultDiv.innerHTML = '<p class="error">Need a Name!</p>';   
      } else if (!email) {
        resultDiv.innerHTML = '<p class="error">Need an Email!</p>';
      } else if (!password) {
        resultDiv.innerHTML = '<p class="error">Need a Password!</p>';
      } else {
        resultDiv.innerHTML = '<p>Form submitted successfully!</p>';
      }
    });
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
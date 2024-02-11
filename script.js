
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
}

function clickedDarkMode() {
    toggleDarkMode();
    setDarkMode();
}

function setDarkMode() {
    styleBody();
    styleNav();
}

function styleBody() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function styleNav() {
    let allButtons = document.getElementsByClassName("nav-item");
    for (let i = 0; i < allButtons.length; i++) {
        let button = allButtons[i];
    }
    button.classList.toggle("nav-dark");
}

function toggleDarkMode() {
    if (localStorage.getItem("dark-mode") === "true") {
        localStorage.setItem("dark-mode", false);

    } else {
        localStorage.setItem("dark-mode", true);
    }
}
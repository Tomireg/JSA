
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
}

function styleBody() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function styleNav() {
    let navElement = document.nav-item;
    navElement.classList.toggle("nav-dark")
}

function toggleDarkMode() {
    if (localStorage.getItem("dark-mode") === "true") {
        localStorage.setItem("dark-mode", false);

    } else {
        localStorage.setItem("dark-mode", true);
    }
}
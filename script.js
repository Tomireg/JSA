
document.addEventListener("DOMContentLoaded", init);
function init() {
    let navButton = document.getElementById("mybtn");
    navButton.addEventListener("click", setDarkMode);
}

function setDarkMode() {
    element.classList.toggle("dark-mode");
}

function eventButtonClick(event) {
    let button = event.target;
    document.getElementById("thank-rating").innerText = "You selected " + button.value + " out of 5";
}

function eventDisplay() {
    document.getElementById("toHide").classList.replace("show", "hide")
    document.getElementById("toShow").classList.replace("hide", "show")
}

document.getElementById("btn-1").addEventListener("click", eventButtonClick);
document.getElementById("btn-2").addEventListener("click", eventButtonClick);
document.getElementById("btn-3").addEventListener("click", eventButtonClick);
document.getElementById("btn-4").addEventListener("click", eventButtonClick);
document.getElementById("btn-5").addEventListener("click", eventButtonClick);
document.getElementById("btn-submit").addEventListener("click", eventDisplay);
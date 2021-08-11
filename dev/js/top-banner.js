
const toogleButton = document.getElementById("toggle-popup");
toogleButton.onclick = function () {
    const popup = document.getElementById("popup");
    popup.classList.toggle("top-banner__popup_active");
}
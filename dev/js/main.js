const firstButton = document.getElementsByClassName('footer__button-arrow')[0];
const secondButton = document.getElementsByClassName('footer__button-arrow')[1];
const thirdButton = document.getElementsByClassName('footer__button-arrow')[2];
const fourthButton = document.getElementsByClassName('footer__button-arrow')[3];
const fifthButton = document.getElementsByClassName('footer__button-arrow')[4];

const firstList = document.getElementsByClassName('footer__menu-list')[0];
const secondList = document.getElementsByClassName('footer__menu-list')[1];
const thirdList = document.getElementsByClassName('footer__menu-list')[2];
const fourthList = document.getElementsByClassName('footer__menu-list')[3];
const fifthList = document.getElementsByClassName('footer__menu-list')[4];

const firstImage = document.getElementsByClassName('footer-arow')[0];
const secondImage = document.getElementsByClassName('footer-arow')[1];
const thirdImage = document.getElementsByClassName('footer-arow')[2];
const fourthImage = document.getElementsByClassName('footer-arow')[3];
const fifthImage = document.getElementsByClassName('footer-arow')[4];

firstButton.onclick = function () {
    firstList.classList.toggle("footer__menu-list_active");
    firstImage.classList.toggle("footer-arrow_top");
}

secondButton.onclick = function () {
    secondList.classList.toggle("footer__menu-list_active");
    secondImage.classList.toggle("footer-arrow_top");
}

thirdButton.onclick = function () {
    thirdList.classList.toggle("footer__menu-list_active");
    thirdImage.classList.toggle("footer-arrow_top");
}

fourthButton.onclick = function () {
    fourthList.classList.toggle("footer__menu-list_active");
    fourthImage.classList.toggle("footer-arrow_top");
}

fifthButton.onclick = function () {
    fifthList.classList.toggle("footer__menu-list_active");
    fifthImage.classList.toggle("footer-arrow_top");
}

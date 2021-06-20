'use strict';

const menu = document.querySelector('.menu')
const hamburgerSvg = document.querySelector('.hamburger-svg')
let menuStatus = false;

hamburgerSvg.addEventListener('click', e => {
    toggleMenu()
})

const toggleMenu = () => {
    if (menuStatus == false) {
        menu.style.display = 'flex';
        menuStatus = true;
    }

    else {
        menu.style.display = "none";
        menuStatus = false;
    }
}
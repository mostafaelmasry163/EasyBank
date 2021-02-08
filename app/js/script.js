const ham = document.querySelector('.ham');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.navbar__mobileMenue');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');




ham.addEventListener('click', function () {
    navbar.classList.toggle('open');


    body.classList.toggle('noScroll');
    if (overlay.classList.contains('fade-in')) {
        ham.children[0].setAttribute("src", "./images/icon-hamburger.svg");

        fadeElems.forEach(el => {

            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        });
    } else {
        ham.children[0].setAttribute("src", "./images/icon-close.svg");

        fadeElems.forEach(el => {

            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        });
    }
});

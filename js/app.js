const menu = document.querySelector('.menu');
const navBar = document.querySelector('nav.navBar');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navBar.classList.toggle('active');
});
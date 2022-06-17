const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const closeburger = document.getElementById('closeburger');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});
closeburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});
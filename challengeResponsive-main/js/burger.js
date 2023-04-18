const burgerMenu = document.querySelector('#burger_menu');
const menuModal = document.querySelector('#menu_content');

burgerMenu.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});
menuModal.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});
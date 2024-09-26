const toggleMenu = document.querySelector('.toggle');
const navLinks = document.querySelector('nav ul');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
// const toggleMenu = () => {
//     const navLinks = document.getElementById('nav-links');
//     navLinks.classList.toggle('nav-active');
// }

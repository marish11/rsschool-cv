let button = document.querySelector('.open-close-button');
let menu = document.querySelector('.nav-burger');

button.addEventListener('click', toggle);

function toggle() {
	button.classList.toggle("button-open");
    menu.classList.toggle("menu-open");
}
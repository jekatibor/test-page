let content = document.querySelector('body');
let trigger = document.querySelector('.nav-button');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    content.classList.toggle('menu-slide-active');
});
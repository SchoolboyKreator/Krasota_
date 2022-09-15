// toggle burger with click or tap
const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.navigation');
const search = document.querySelector('.search-form-and-button');
const menuItems = document.querySelectorAll('.menu-item');
const width = window.screen.width;

burger.addEventListener('touchstart', function (e){
    nav.classList.toggle('visible');
    search.classList.toggle('visible-search');
})



window.addEventListener('resize', function (e) {
    if (width > 768) {
        nav.classList.remove('visible');
        search.classList.remove('visible-search');

    }
})

nav.addEventListener('touchstart', (event) => {
    let target = event.target;
    if(target.classList.contains('menu-item')) {
        for(let i = 0; i < menuItems.length; i++) {
            // Убираем у других
            menuItems[i].classList.remove('active-menu');
        }
        // Добавляем тому на который нажали
        target.classList.add('active-menu');
    }
})



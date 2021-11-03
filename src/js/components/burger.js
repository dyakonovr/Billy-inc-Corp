const burger = document.querySelector('.burger');
const menuBlock = document.querySelector('.header__wrapper');
const btns = document.querySelector('.header__btns');
const nav = document.querySelector('.hd-nav-js');
const subLists = document.querySelectorAll('.header__sub-list');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('burger-close');
    menuBlock.classList.toggle('header__wrapper--show');
    btns.classList.toggle('show');
    nav.classList.toggle('show');
    subLists.forEach(list => {
      list.classList.toggle('show');
    });
    scrollToggle();
  });
}
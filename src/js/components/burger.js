const burger = document.querySelector('.burger');
const nav = document.querySelector('.hd-nav-js');
const btns = document.querySelector('.header__btns');
const subLists = document.querySelectorAll('.header__sub-list');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('burger-close');
    nav.classList.toggle('header__nav--show');
    btns.classList.toggle('show');
    subLists.forEach(list => {
      list.classList.toggle('show');
    });
    scrollToggle();
  });
}
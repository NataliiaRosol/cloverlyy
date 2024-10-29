const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.header-menu');
const closeBtn = document.querySelector('.menu-close');
const overlay = document.querySelector('.overlay');


menuBtn.addEventListener('click', menuBtnClicked)
function menuBtnClicked(){
  menu.classList.add('menu-open');
  overlay.classList.add('menu-open');
}

function menuCLosed(){
  menu.classList.remove('menu-open');
  overlay.classList.remove('menu-open');
}

closeBtn.addEventListener('click', menuCLosed);
overlay.addEventListener('click', menuCLosed);
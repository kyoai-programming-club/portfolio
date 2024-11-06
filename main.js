'use strict';

{
 // Swiper
  // const swiper = new Swiper('.swiper');

  // メニューの表示（スマホ）
  const open = document.getElementById('open');
  const navArea = document.querySelector('.navArea');
  const close = document.getElementById('close');

  const open2 = document.getElementById('open2');


  open.addEventListener('click', () => {
    navArea.classList.add('open');
    close.classList.add('show');
  });

  close.addEventListener('click', () => {
    navArea.classList.remove('open');
    close.classList.remove('show');
  });

  open2.addEventListener('click', () => {
    navArea.classList.add('open2');
    close.classList.add('show');
  });

  close.addEventListener('click', () => {
    navArea.classList.remove('open2');
    close.classList.remove('show');
  });
}
'use strict'

{
  // Swiper
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      navigation: {
        prevEl: '.swiper-button-prev', 
        nextEl: '.swiper-button-next', 
      },
    });
}
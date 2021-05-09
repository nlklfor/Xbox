const swiper = new Swiper('.swiper-container',  '.exclusive' , '.swiper-wrapper' ,  {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  slidesPerView : 7,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false
  }
});

document.querySelector('.button__burger').addEventListener('click' , (event) => {
    document.querySelector('.header').classList.toggle('header__active-nav')
});
  
  
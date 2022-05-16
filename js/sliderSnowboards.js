
var swiper = new Swiper(".snowboards__content", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides:true,
  loop:true,
  loopedSliders:5,
  slidesPerView:1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1000:
    {
      slidesPerView:4.5,
      spaceBetween:110,
    },
    770:
    {
      slidesPerView:3,
      spaceBetween:150,
    },
    608:
    {
      slidesPerView:3,
      spaceBetween:70,
    },
    588:
    {
      slidesPerView:2.5,
      spaceBetween:150,
    },
    160:
    {
      slidesPerView:1,
    },
  },

  sliderToClickedSlide: true,
  keyboard: {
    enabled: true,
  },
});

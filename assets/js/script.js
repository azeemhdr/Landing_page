const appSlider = new Swiper(".app-slider-slide", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
	320:{
		slidesPerView:1,
		spaceBetween:10,
	},
	480:{
		slidesPerView:2,
		spaceBetween:10,
	},
	640:{
		slidesPerView:4,
		spaceBetween:10,
	}
  }
});

const reviewSlider = new Swiper(".review-slider", {
  speed: 700,
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade:true
  },
});

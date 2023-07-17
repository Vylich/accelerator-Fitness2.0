import Swiper from '../vendor/swiper';

const coachSwiper = document.querySelector('.cards__slider');
const reviewsSwiper = document.querySelector('.reviews__slider');

const checkCoachSwiper = () => {
  const swiper = new Swiper(coachSwiper, {


    navigation: {
      nextEl: '.cards__button-next',
      prevEl: '.cards__button-prev',
    },
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    loop: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
    },
  });
};


const checkReviewsSwiper = () => {

  const swiper = new Swiper(reviewsSwiper, {

    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    spaceBetween: 60,
    slidesPerView: 1,
  });

};

export {checkReviewsSwiper, checkCoachSwiper};

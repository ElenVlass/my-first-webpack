// import gallery from './gallery.js';
import './styles/common.scss';
import 'swiper/swiper.scss';
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  speed: 20,
  // spaceBetween: 100,
//   effect: 'fade',
//   slidesPerView: 1,
//   fadeEffect: {
//     crossFade: true,
//   },
});
// const swiper = document.querySelector('.swiper-container').swiper;

// // Now you can use all slider methods like
swiper.slideNext();


import { reveal } from './functions/animation';
import { 
  initTemplatesSlider,
  initTestimonialSlider,
  navigateToNextSlide,
  navigateToPrevSlide,
} from './functions/sliders';

document.addEventListener('DOMContentLoaded', () => {
  // toggle header menu
  $('#btnMenu').on('click', () => {
    $('#headerMenu').addClass('active');
    $('body').addClass('overflow-hidden');
  });

  $('#btnCloseMenu').on('click', () => {
    $('#headerMenu').removeClass('active');
    $('body').removeClass('overflow-hidden');
  });

  $('#btnScrollDown').on('click', () => {
    window.scrollTo({
      top: $('.our-main-services').offset().top,
      behavior: 'smooth'
    });
  });

  // init reveal animation
  window.addEventListener("scroll", reveal);


  // services slider
  // if($('.our-main-services__slides .services-slide')) {
  //   initServicesSlider('.our-main-services__slides .services-slide');
  // }

  // templates slider
  if($('.templates-slider')) {
    initTemplatesSlider('.templates-slider');

    $('#templateSliderPrev').on('click', function () {
      $('.templates-slider').slick('slickPrev');
    });

    $('#templateSliderNext').on('click', function () {
      $('.templates-slider').slick('slickNext');
    });
  }

  // testimonial slider
  if($('.testimonial-slider')) {
    initTestimonialSlider('.testimonial-slider');

    $('#testimonialSliderPrev').on('click', function () {
      $('.testimonial-slider').slick('slickPrev');
    });

    $('#testimonialSliderNext').on('click', function () {
      $('.testimonial-slider').slick('slickNext');
    });
  }

  // header slider navigator
  $('#headerSliderNext').on('click', () => {
    navigateToNextSlide('.header__slider');
  });
  $('#headerSliderPrev').on('click', () => {
    navigateToPrevSlide('.header__slider');
  });

  $('.header__slider').on('afterChange', updateHeaderSlideNumber);

  
});
import { reveal } from './functions/animation';
import {
  initServicesSlider,
  initTemplatesSlider,
  initTestimonialSlider,
  initTestimonialSliderNavigator,
  initPartnersSlider,
} from './functions/sliders';

import "./functions/counter-animation";

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


  // templates slider
  if($('.templates-slider').length) {
    initTemplatesSlider('.templates-slider');

    $('#templateSliderPrev').on('click', function () {
      $('.templates-slider').slick('slickPrev');
    });

    $('#templateSliderNext').on('click', function () {
      $('.templates-slider').slick('slickNext');
    });
  }

  // testimonial slider
  if($('.testimonial-slider').length) {
    initTestimonialSlider('.testimonial-slider');

    $('#testimonialSliderPrev').on('click', function () {
      $('.testimonial-slider').slick('slickPrev');
    });

    $('#testimonialSliderNext').on('click', function () {
      $('.testimonial-slider').slick('slickNext');
    });

    $('.testimonial-slider').on('afterChange', function (event, slick, slide) {
      $('.testimonial-slider__navigrator').slick('slickGoTo', slide);
    });
  }

  // testimonial slider navigrator
  if($('.testimonial-slider__navigrator').length) {
    initTestimonialSliderNavigator('.testimonial-slider__navigrator');
  }

  // init Partners Slider
  if($('.partners__slider').length) {
    initPartnersSlider('.partners__slider');
  }

});
import './vendor';
import { toggleMenu, closeMenu } from './functions/menu';
import { reveal } from './functions/animation';
import { 
  initServicesSlider,
  navigateToNextSlide,
  navigateToPrevSlide,
  updateHeaderSlideNumber,
  initEzbaSliderNavigator,
  updateEzbaSlide,
  initSwalifSlider
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

  // toggle | close Burger Menu
  // menuBurger.addEventListener('click', toggleMenu);
  // menuOverlay.addEventListener('click', closeMenu);
  

  // init reveal animation
  window.addEventListener("scroll", reveal);


  // services slider
  // if($('.our-main-services__slides .services-slide')) {
  //   initServicesSlider('.our-main-services__slides .services-slide');
  // }

  // header slider navigator
  $('#headerSliderNext').on('click', () => {
    navigateToNextSlide('.header__slider');
  });
  $('#headerSliderPrev').on('click', () => {
    navigateToPrevSlide('.header__slider');
  });

  $('.header__slider').on('afterChange', updateHeaderSlideNumber);

  // ezba slider
  if($('.ezba-slider-nav') && $('#ezbaSlider')) {

    // ezba slider config
    $('#ezbaSlider').carousel({ interval: false });

    // init ezba slide navigator
    initEzbaSliderNavigator('.ezba-slider-nav');
    
    $('.ezba-slider-nav .slick-slide:not(.slick-cloned)').each((i, e) => {
      $(e).on('click', () => updateEzbaSlide(null, null, i));
    });

    $('.ezba-slider-nav').on('afterChange', updateEzbaSlide);
  }

  // swalif slider
  if($('.swalif-slider')) {
    initSwalifSlider('.swalif-slider');
  }

  // searching about available places
  const searchForm = $('.search-form').find('.search-form__place-name');

  $(searchForm).on('focus', function () {
    toggleResultsMenu(this, true);
  });

  $('.search-form, .search-form__results').on('click', function(e) {
    e.stopPropagation();
  });

  $(searchForm).on('blur', function () {
    toggleResultsMenu(this, false)
  });

 
});
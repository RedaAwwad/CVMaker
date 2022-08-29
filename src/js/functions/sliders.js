// init services slider
export const initServicesSlider = (element, interval = 3000) => {
  let currentEleIndex = 0;
  let prevEleIndex = 2;
  const slides = document.querySelectorAll(element);
  setInterval(() => {

    for (let idx = 0; idx < slides.length; idx++) {
      
      if(currentEleIndex == idx) {
        let nextEleIdx = (idx + 1);
        
        slides[idx].classList.remove('active');

        if(nextEleIdx === slides.length) {
          slides[0].classList.add('active');
          slides[idx].classList.add('last');

          prevEleIndex = idx;
          currentEleIndex = 0;
        } else {
          console.log(slides[nextEleIdx]);

          currentEleIndex++;

          slides[nextEleIdx].classList.add('active');
          slides[prevEleIndex].classList.remove('last');
        }
      }
    }
  }, interval);
}

// navigate to next slide
export const navigateToNextSlide = (sliderElement) => {
  $(sliderElement).slick('slickNext');
}

// navigate to prev slide
export const navigateToPrevSlide = (sliderElement) => {
  $(sliderElement).slick('slickPrev');
}

// init Templates Slider
export const initTemplatesSlider = (element) => {
  $(element).slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    // fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
}

// init Testimonial Slider
export const initTestimonialSlider = (element) => {
  $(element).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    // fade: true,
    // cssEase: 'linear'
  });
}



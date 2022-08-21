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


// init header slider
export const initHeaderSlider = (element) => {
  $(element).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });
}

// navigate to next slide
export const navigateToNextSlide = (sliderElement) => {
  $(sliderElement).slick('slickNext');
}

// navigate to prev slide
export const navigateToPrevSlide = (sliderElement) => {
  $(sliderElement).slick('slickPrev');
}

// update side number
export const updateHeaderSlideNumber = (event, slick, currSlide) => {
  let count = ( currSlide + 1 ) < 9 ? `0${currSlide + 1}` : ( currSlide + 1 );

  $('#headerSliderCount').text(count);
}

// init ezba slider navigator
export const initEzbaSliderNavigator = (element) => {
  $(element).slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
}

// update Ezba Slide
export const updateEzbaSlide = (event, slick, currSlide) => {
  $('#ezbaSlider').carousel(currSlide);
}

// init swalif slider
export const initSwalifSlider = (element) => {
  $(element).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }, 
    {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]
  });
}

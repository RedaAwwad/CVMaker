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
    // autoplay: true,
  });
}

// init Testimonial Slider Navigator
export const initTestimonialSliderNavigator = (element) => {
  $(element).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    // focusOnSelect: true,
    touchMove: false,
    draggable: false,
    // fade: true,
    cssEase: 'linear'
  });
}

// partners slider
export const initPartnersSlider = (element) => {
  $(element).slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
}

// Memberships Slider
export const initMembershipsSlider = (element) => {
  $(element).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 2,
      //   }
      // },
    ]
  });
}

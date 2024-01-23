const APP = {
  init: () => {
    // Common
    APP.handleDeadLinks();
    APP.scrollToAnchor();

    // Homepage
    APP.initSlider('.specialists-slider');
    APP.initSlider('.posts-slider');
  },
  
  handleDeadLinks: () => {
    document.querySelectorAll("a[href='#']").forEach($link => {
      $link.addEventListener("click", e => e.preventDefault());
    });
  },

  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  scrollToAnchor: ($el = document, offset = 0) => {
    $el.querySelectorAll('.smoothScroll').forEach($link => {
      $link.addEventListener("click", function(event) {
        event.preventDefault();
        const href = this.getAttribute("href"), 
              $el = document.querySelector(href); 
        if ($el) {
          window.scrollTo({ top: $el.offsetTop + offset, behavior: "smooth" });
        }
      });
    });
  },

  initSlider: (selector) => {
    const $el = document.querySelector(selector);
    if ($el) {
      new Swiper($el, APP.createSliderOptions(selector));
    }    
  },

  createSliderOptions: (selector) => {
    return {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: `${selector} .swiper-button-next`,
        prevEl: `${selector} .swiper-button-prev`,
      },  
      pagination: {
        el: `${selector} .swiper-pagination`,
        type: 'bullets',
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: { 
        768: {
          slidesPerView: 2      
        },
        992: {
          slidesPerView: 3        
        },
        1400: {
          slidesPerView: 4        
        }
      }
    }
  },

};

(function() {
  APP.init();
})();

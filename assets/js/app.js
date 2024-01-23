const APP = {
  init: () => {
    APP.handleDeadLinks();
    APP.scrollToAnchor();

    // Homepage
    APP.initSpecialistsSlider();
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

  initSpecialistsSlider: () => {
    const $slider = document.querySelector(".specialists-slider");
    if (!$slider) return;
    const swiper = new Swiper($slider, {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },  
      /* autoplay: {
        delay: 5000,
      }, */
      breakpoints: { 
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3        
        },
        // when window width is >= 1400px
        1400: {
          slidesPerView: 4        
        }
      },
      on: {
        resize: function enableOnlyMobile(swiper){
          // Disable the slider when the window width is less than or equal to 767
          if(window.innerWidth <= 767){
            swiper.disable()
            swiper.el.classList.add('-non-slider')
          }else{
            swiper.enable()
            swiper.el.classList.remove('-non-slider')
          }
        },
      }
    });
  }

};

(function() {
  APP.init();
})();

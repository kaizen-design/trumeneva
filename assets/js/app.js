const APP = {
  init: () => {
    // Common
    APP.handleDeadLinks();
    APP.scrollToAnchor();

    // Homepage
    APP.initSlider('.specialists-slider');
    APP.initSlider('.posts-slider');

    // Modals
    APP.handleContactModal();
  },
  
  handleDeadLinks: () => {
    document.querySelectorAll('a[href="#"]').forEach($link => {
      $link.addEventListener('click', e => e.preventDefault());
    });
  },

  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  scrollToAnchor: ($el = document, offset = 0) => {
    $el.querySelectorAll('.smoothScroll').forEach($link => {
      $link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href'), 
              $el = document.querySelector(href); 
        if ($el) {
          window.scrollTo({ 
            top: $el.offsetTop + offset, 
            behavior: 'smooth' 
          });
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
          slidesPerView: 2,      
        },
        992: {
          slidesPerView: 3,        
        },
        1400: {
          slidesPerView: 4,        
        }
      }
    }
  },

  handleContactModal: () => {
    const $modal = document.getElementById('contactSpecialistModal');

    const $form = $modal.querySelector('.contact-form');
    const $formControls = $form.querySelectorAll('.form-control');
    const $formMain = $form.querySelector('.form-main');
    const $formResult = $form.querySelector('.form-result');
    const $button = $form.querySelector('[type="submit"]');
    const buttonText = $button.textContent;
    
    // Populate additional form data
    $modal.addEventListener('show.bs.modal', (event) => {      
      const $invoker = event.relatedTarget;
      const recipient = $invoker.getAttribute('data-specialist')
      const $name = $modal.querySelector('#specialistName');
      $name.textContent = recipient;
    });

    // Submit form
    $form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get form data
      const formData = new FormData($form);

      // Disable submit button
      $button.setAttribute('disabled', true);
      $button.textContent = 'Отправка...';

      return new Promise((resolve, reject) => {
        // Do API request here...
        setTimeout(() => {
          resolve()
        }, 3000);
      })
      .then((res) => {
        // Show success message
        $formMain.classList.add('d-none');
        $formResult.classList.remove('d-none');
      })
      .catch(error => console.error(error))
      .finally(() => {
        // Restore button text
        $button.removeAttribute('disabled');
        $button.textContent = buttonText;
      });
    });

    // Form cleanup
    $modal.addEventListener('hidden.bs.modal', () => {
      $formMain.classList.remove('d-none');
      $formResult.classList.add('d-none');
      $formControls.forEach(control => control.value = '');
    });

  },

};

function initAccordion() {
  
}

(function() {
  APP.init();
})();

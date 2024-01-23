const APP = {
  init: () => {
    APP.handleDeadLinks();
    APP.scrollToAnchor();
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
  }
};

(function() {
  APP.init();
})();

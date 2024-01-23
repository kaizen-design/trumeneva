const APP = {
  init: function() {
    //  Prevent jump to top on "#" links
    document.querySelectorAll("a[href='#']").forEach(link => {
      link.addEventListener("click", e => e.preventDefault());
    });
  },
  
  scrollTop: function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
(function() {
  APP.init();
})();

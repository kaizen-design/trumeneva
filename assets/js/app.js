const APP = {
  init: function() {
    APP.functionOne();
  },
  functionOne: function () {
  
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  // your page initialization code here
  // the DOM will be available here
  APP.init();
})();

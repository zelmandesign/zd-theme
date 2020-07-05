import Typed from 'typed.js';

export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: false,
      typeSpeed: 30,
      startDelay: 1000,
      backSpeed: 20,
      showCursor: false,
    });
    typed
    
    var typed2 = new Typed('#typed2', {
      stringsElement: '#typed-strings2',
      loop: false,
      typeSpeed: 30,
      startDelay: 3000,
      backSpeed: 20,
      showCursor: false,
    });
    typed2
    console.log('typed initialized')
  },
};

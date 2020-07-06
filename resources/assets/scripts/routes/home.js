import Typed from 'typed.js';
//import gsap from 'gsap';

export default {
  init() {
    $('.loader-inner').loaders()
    // JavaScript to be fired on the home page
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

    // function enterCurtain() {
    //   var tl = gsap.timeline({repeat: 0});

    //   tl.to('.curtain-bg', {
    //     duration: 1, 
    //     ease: 'expo.inOut',
    //     width: '100%', 
    //     opacity: 1,
    //   });
    //   tl.to('.curtain-bg', {
    //     duration: 0.5, 
    //     ease: 'expo.inOut',
    //     right: '-100vw',
    //   });
    // }
    // enterCurtain()
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    
  },
};

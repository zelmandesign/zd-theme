// barba.js

import barba from '@barba/core';
import gsap from 'gsap';
import home from './routes/home';
//import about from './routes/about';

function enterCurtain() {
  var tl = gsap.timeline({repeat: 0});
  tl.to('.curtain-enter', {
    duration: 0.5, 
    ease: 'Expo.easeIn',
    right: '-100vw',
    opacity: 0.25,
  }, '+=2');
}

function leaveCurtain() {
  var tl = gsap.timeline({repeat: 0});
  tl.to('.curtain-leave', {
    duration: 1, 
    ease: 'Expo.easeIn',
    width: '100%', 
    opacity: 1,
  });
}

export default {
  containerInit() {
    // common code for all containers
    // if you want to run it add this.containerInit(); inside barba enter function
    /* ... */
  },
  init() {
    // JavaScript to be fired on all pages

    $.post(ajax_object.ajax_url, {action: 'is_user_logged_in'}, function (isLogged) {
      if (!isLogged) barba.init({
        transitions: [
          {
            name: 'page',
            /* ... */
          } , {
            name: 'to-a-page',
            to: {
              namespace: ['page'],
            },
            enter: function (data) {
              // Remove the old container
              enterCurtain();
              // this.containerInit();
              data.current.container.parentNode.removeChild(data.current.container);
              gsap.from(data.current.container, 1, {
                opacity: 0,
                onComplete: () => {
                  this.async();
                  $('body').attr('class', $('#body-classes').attr('class'));
                },
              });
            },
            leave: function (data) {
              leaveCurtain()
              gsap.to(data.current.container, 1, {onComplete: this.async()});
            },
          },
          {
            name: 'home',
            /* ... */
          } , {
            name: 'to-home-page',
            to: {
              namespace: ['home'],
            },
            enter: function (data) {
              // Remove the old container
              enterCurtain();
              home.init();
              // this.containerInit();
              data.current.container.parentNode.removeChild(data.current.container);
              gsap.from(data.current.container, 1, {
                opacity: 0,
                onComplete: () => {
                  this.async();
                  $('body').attr('class', $('#body-classes').attr('class'));
                },
              });
            },
            leave: function (data) {
              leaveCurtain()
              gsap.to(data.current.container, 1, {onComplete: this.async()});
            },
          },
        ],
      });
    });
  },
};
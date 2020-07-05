// barba.js

import barba from '@barba/core';
import gsap from 'gsap';
import about from './routes/about'

export default {
  init() {
    // JavaScript to be fired on all pages
    $.post(ajax_object.ajax_url, {action: 'is_user_logged_in'}, function (isLogged) {
      if (!isLogged) barba.init({
        transitions: [
          {
            name: 'basic',
            /* ... */
          } , {
            name: 'to-about-page',
            to: {
              namespace: ['about'],
            },
            leave: function (data) {
              gsap.to(data.current.container, 1, {opacity: 0, onComplete: this.async()});
            },
            enter: function (data) {
              // Remove the old container
              about.init();
              // this.containerInit();
              data.current.container.parentNode.removeChild(data.current.container);
              gsap.from(data.current.container, 1, {
                opacity: 0, 
                onComplete: () => {
                  this.async();
      
                  $('body').attr('class', $('#body-classes').attr('class'));
                  console.log('hjaslasjks')
                },
              });
            },
          },
        ],
      });
    });
    // barba.init({
    //   transitions: [
    //     {
    //       name: 'basic',
    //       /* ... */
    //     } , {
    //       name: 'to-some-page',
    //       to: {
    //         namespace: ['about'],
    //       },
    //       leave: function (data) {
    //         gsap.to(data.current.container, 1, {opacity: 0, onComplete: this.async()});
    //       },
    //       enter: function (data) {
    //         // Remove the old container
    //         about.init();
    //         this.containerInit();
    //         data.current.container.parentNode.removeChild(data.current.container);
    //         gsap.from(data.current.container, 1, {opacity: 0, onComplete: this.async()});
    //       },
    //     },
    //   ],
    // });
  },
};
// Hide Nav
'use strict';

var c, currentScrollTop = 0,
  navbar = $('.banner');

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if ($('.navbar-collapse').hasClass('show')) {
    event.preventDefault();
  }
  else if (c < currentScrollTop && a > b) {
    navbar.addClass('nav-hidden');
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.removeClass('nav-hidden');
  }

  c = currentScrollTop;
});

// Hamburger toggle pure JS
let hamburgerEl = document.querySelector('.hamburger--collapse');

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('is-active');
});
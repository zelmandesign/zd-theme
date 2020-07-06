// import external dependencies
import 'jquery';
import '@fortawesome/fontawesome-free/js/all.js';
import myBarba from './barba'
import 'loaders.css/loaders.css.js'

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import about from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  about,
});

// Load Events
// jQuery(document).ready(() => routes.loadEvents());

// Init barba && Load Events
jQuery(document).ready(() => {
  routes.loadEvents();
  myBarba.init();
});

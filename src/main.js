var Parse = require('parse').Parse;

var AboutPage = require('./pages/AboutPage');
var ContentPage = require('./pages/ContentPage');
var HomePage = require('./pages/HomePage');
var ReactHack = require('ReactHack');

require('../replacement_for_env_vars');
Parse.initialize(application_id, javascript_key);

ReactHack.start({
  '': HomePage,
  'pages/:name': ContentPage,
  'pages/:name/:mode': ContentPage,
  'about': AboutPage
});
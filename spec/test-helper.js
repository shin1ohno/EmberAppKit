document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

var resolver = require('appkit/spec/helpers/resolver')['default'];

window.startApp          = require('appkit/spec/helpers/start-app')['default'];
window.isolatedContainer = require('appkit/spec/helpers/isolated-container')['default'];

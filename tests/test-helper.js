document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

var resolver = require('appkit/tests/helpers/resolver')['default'];
require('ember-qunit').setResolver(resolver);


window.startApp          = require('appkit/tests/helpers/start-app')['default'];
window.isolatedContainer = require('appkit/tests/helpers/isolated-container')['default'];

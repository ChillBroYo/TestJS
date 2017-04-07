//This file is not transpiled due to testing nature so we must call the babel changes beforehand

//Register babel to transpile
require('babel-register')();

//Remove webpack features that mocha does not understand
require.extensions['css'] = function() {};

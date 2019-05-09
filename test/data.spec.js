global.window = global;
global.assert = require('chai').assert;
// require('../src/data/worldbank/worldbank.js');

// require('../src/js/data');

require('./data.spec.js');
//console.log("rara 1");


describe('orderData', () => {


    it('debería ser una function', () => {
      assert.equal(typeof orderData, 'function');
    })
});
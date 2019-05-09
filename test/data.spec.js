global.window = global;
global.assert = require('chai').assert;
require('../src/data/worldbank/worldbank');
require('../src/js/data');
require('./data.spec.js');



describe('aplicar', () => {

  it('debería ser una function', () => {
    assert.equal( typeof aplicar,'function');
  })

});


describe('orderData', () => {

  it('debería ser una function', () => {
    assert.equal( typeof orderData,'function');
  })

});


describe('orderDataDes', () => {

  it('debería ser una function', () => {
    assert.equal( typeof orderDataDes,'function');
  })

});


describe('empleoOcupados', () => {

  it('debería ser una function', () => {
    assert.equal( typeof empleoOcupados,'function');
  });

  it ('deberia retornar "3960.000" para (1,4000)',() => {
   assert.deepEqual( window.empleoOcupados(1, 4000),"3960.000");
  });
});
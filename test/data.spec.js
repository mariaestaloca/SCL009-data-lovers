global.window = global;
global.assert = require('chai').assert;
require('../src/data/worldbank/worldbank');
require('../src/js/data');
require('./data.spec.js');



// describe('orderData', () => {


//   it('debería ser una function', () => {
//     assert.equal(1,1);
//   })

// falta salida 
  // it('debería retornar "array(139)" para "dataPrueba"', () => {
  //   assert.equal(typeof orderData(dataPrueba), );
  // })

// });



describe('aplicar', () => {

  it('debería ser una function', () => {
    assert.equal( aplicar(),'function');
  })

  // const year ="2010";
  // const question = "Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)";
  // const country="PER";

  // it('debería ser una function', () => {
  //   assert.equal(typeof aplicar(year,question,country), 'function');

  // })

});
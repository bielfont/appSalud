// const assert = require('assert');
const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

const Bascula = require('./main');

describe("Test using ASSERT interface from CHAI module: con datos anotarPeso(73,1.66)-(63,1.36)-(83,1.86)", function() {
  describe("Check 1: ", function() {
  it("Chequeando PesoMaximo: assert.equal(value,'value'): debe ser valor 83", function() {
    
  result   = nota.obtenerPesoMaximo();
  assert.equal(result, "83");
  });
  });
 // it("Chequeando es un string: assert.typeOf(value,'value'): ", function() {
 // result   = nota.obtenerPesoMaximo();
 // assert.typeOf(result, "string");
 // });


 //   it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
 //   result   = nota.obtenerPesoMaximo();
 //   assert.lengthOf(result, 2);
 //   });

  describe("Check 2: ", function() {
  it("Chequeando PesoMinimo: expect(value).to.equal('value'): debe ser valor 63", function() {
    
  result   = nota.obtenerPesoMinimo();
  expect(result).to.equal(63);
  });
  });

  describe("Check 3: ", function() {
    it("Chequeando calcularIMC: value.should.equal(value): debe ser valor 23.991212856977683", function() {
      
    result   = nota.calcularIMC();
    result.should.equal(23.991212856977683)
    });
    });

 
 });
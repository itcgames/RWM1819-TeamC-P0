/* global p0TeamC, describe, it, expect, should */

describe('p0TeamC()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamC).to.be.a('function');

  });

  it('2 Cubed', function () {
    expect(Cube(2)).to.equal(8);
  });
  it('4 Cubed', function () {
    expect(Cube(4)).to.equal(64);
  });
  it('does something else', function () {
    expect(true).to.equal(false);
  });
  
  it('Integrates modulo 3', function () {
    expect(Modulo_3).to.be.a('function');
    expect(Modulo_3(7)).to.equal(1);
  });
  // Add more assertions here
});

/* global p0TeamC, describe, it, expect, should */

describe('p0TeamC()', function () {
  'use strict';

  it('Integrates Cube()', function() {
    expect(Cube).to.be.a('function');
    expect(Cube(4)).to.equal(64);
    expect(Cube(-2)).to.equal(-8);
    expect(Cube(0)).to.equal(0);
  });
  
  it('Integrates Modulo_3()', function () {
    expect(Modulo_3).to.be.a('function');
    expect(Modulo_3(7)).to.equal(1);
  });

  it('Integrates running_total()', function () {
    expect(running_total).to.be.a('function');
    expect(running_total(1)).to.equal(1);
    expect(running_total(2)).to.equal(3);
    expect(running_total(-1)).to.equal(2);
  });

  it('Integrates decrement_if_less_than_first()', function() {
    expect(decrement_if_less_than_first).to.be.a('function');
    expect(decrement_if_less_than_first([10, 0, 5, 11])).to.deep.equal([10, -1, 4, 11]);
  })

  it('exists', function () {
    expect(p0TeamC).to.be.a('function');
    expect(p0TeamC('test string')).to.equal(undefined);
    expect(p0TeamC(12)).to.equal(undefined);
    expect(JSON.stringify(p0TeamC([1, 2, 3]))).to.equal(JSON.stringify([3, 5, 5]));
  });
  // Add more assertions here
});

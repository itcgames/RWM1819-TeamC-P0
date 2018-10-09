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
    total = 0;
  });

  it('Integrates decrement_if_less_than_first()', function() {
    expect(decrement_if_less_than_first).to.be.a('function');
    expect(decrement_if_less_than_first([10, 0, 5, 11])).to.deep.equal([10, -1, 4, 11]);
  })

  it('Integrates modulo_first()', function() {
    expect(modulo_first).to.be.a('function');
    expect(modulo_first([5])).to.deep.equal([5%5]);
    expect(modulo_first([2,3,4,5])).to.deep.equal([0,1,0,1]);
    expect(modulo_first([4,2,8,3,9,4,10,5,11,6])).to.deep.equal([0,2,0,3,1,0,2,1,3,2]);
  })

  it('Integrates diff()', function() {
    expect(diff).to.be.a('function');
    expect(diff([4,2,8,3,9,4,10,5,11,6])).to.deep.equal([4,2,6,5,6,5,6,5,6,5]);
  })

  it('Integrates fact()', function() {
    expect(fact).to.be.a('function');
    expect(fact(0)).to.equal(1);
  })

  it ('Integrates xor_21()', function() {
    expect(xor_21).to.be.a('function');
    expect(xor_21(4)).to.equal(17);
    expect(xor_21(2)).to.equal(23);
    expect(xor_21(3)).to.equal(22);
  })

  it ('Integrates collatz()', function(){
    expect(collatz).to.be.a('function');
    expect(collatz(3)).to.equal(10);
    expect(collatz(4)).to.equal(2);
    expect(collatz(5)).to.equal(16);
  })

  it ('Integrates fizzbuzz()', function() {
    expect(fizzbuzz).to.be.a('function');
    expect(fizzbuzz(-15)).to.equal(-15);
    expect(fizzbuzz(-1)).to.equal(-1);
    expect(fizzbuzz(1)).to.equal(1);
    expect(fizzbuzz(3)).to.equal(3);
    expect(fizzbuzz(5)).to.equal(5);
    expect(fizzbuzz(15)).to.equal(0);
  })

  it('exists', function () {
    expect(p0TeamC).to.be.a('function');
    expect(p0TeamC('test string')).to.equal(undefined);
    expect(p0TeamC(12)).to.equal(undefined);
    expect(JSON.stringify(p0TeamC([1, 1, 2]))).to.equal(JSON.stringify([5, 5, 5]));
    total = 0;
  });
  // Add more assertions here
});

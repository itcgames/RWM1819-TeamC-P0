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

  // Add more assertions here
});

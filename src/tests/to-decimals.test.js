'use strict';

const { expect } = require('chai');
const { toDecimals } = require('../../dist/to');

describe('toDecimals', function () {

  it('should return 10 when value is 10.0 and decimals is 0', function () {

    expect(toDecimals(10.0))
      .to
      .equal(10);

  });

  it('should return 10 when value is 10.1 and decimals is 0', function () {

    expect(toDecimals(10.1))
      .to
      .equal(10);

  });

  it('should return 10 when value is 10.2 and decimals is 0', function () {

    expect(toDecimals(10.2))
      .to
      .equal(10);

  });

  it('should return 10 when value is 10.3 and decimals is 0', function () {

    expect(toDecimals(10.3))
      .to
      .equal(10);

  });

  it('should return 10 when value is 10.4 and decimals is 0', function () {

    expect(toDecimals(10.4))
      .to
      .equal(10);

  });

  it('should return 11 when value is 10.5 and decimals is 0', function () {

    expect(toDecimals(10.5))
      .to
      .equal(11);

  });

  it('should return 11 when value is 10.6 and decimals is 0', function () {

    expect(toDecimals(10.6))
      .to
      .equal(11);

  });

  it('should return 11 when value is 10.7 and decimals is 0', function () {

    expect(toDecimals(10.7))
      .to
      .equal(11);

  });

  it('should return 11 when value is 10.8 and decimals is 0', function () {

    expect(toDecimals(10.8))
      .to
      .equal(11);

  });

  it('should return 11 when value is 10.9 and decimals is 0', function () {

    expect(toDecimals(10.9))
      .to
      .equal(11);

  });

  it('should return 0.33 when value is 1/3 and decimals is 2', function () {

    expect(toDecimals(1 / 3, 2))
      .to
      .equal(0.33);

  });

});

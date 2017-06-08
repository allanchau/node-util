'use strict';

const { toDecimals } = require('../../dist/to');

describe('toDecimals', () => {

  test('rounds 10.0 to 10', () => {

    expect(toDecimals(10.0))
      .toBe(10);

  });

  test('rounds 10.1 to 10', () => {

    expect(toDecimals(10.1))
      .toBe(10);

  });

  test('rounds 10.2 to 10', () => {

    expect(toDecimals(10.2))
      .toBe(10);

  });

  test('rounds 10.3 to 10', () => {

    expect(toDecimals(10.3))
      .toBe(10);

  });

  test('rounds 10.4 to 10', () => {

    expect(toDecimals(10.4))
      .toBe(10);

  });

  test('rounds 10.5 to 11', () => {

    expect(toDecimals(10.5))
      .toBe(11);

  });

  test('rounds 10.6 to 11', () => {

    expect(toDecimals(10.6))
      .toBe(11);

  });

  test('rounds 10.7 to 11', () => {

    expect(toDecimals(10.7))
      .toBe(11);

  });

  test('rounds 10.8 to 11', () => {

    expect(toDecimals(10.8))
      .toBe(11);

  });

  test('rounds 10.9 to 11', () => {

    expect(toDecimals(10.9))
      .toBe(11);

  });

  test('1/3 rounds 2 decimals to 0.33', () => {

    expect(toDecimals(1 / 3, 2))
      .toBe(0.33);

  });

});

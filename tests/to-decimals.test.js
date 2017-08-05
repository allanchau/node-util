'use strict';

const { toDecimals } = require('../dist/index.cjs');

describe('toDecimals', () => {

  test('it returns 10 when value is 10.0 and decimals is 0', () => {

    expect(toDecimals(10.0))
      .toBe(10);

  });

  test('it returns 10 when value is 10.1 and decimals is 0', () => {

    expect(toDecimals(10.1))
      .toBe(10);

  });

  test('it returns 10 when value is 10.2 and decimals is 0', () => {

    expect(toDecimals(10.2))
      .toBe(10);

  });

  test('it returns 10 when value is 10.3 and decimals is 0', () => {

    expect(toDecimals(10.3))
      .toBe(10);

  });

  test('it returns 10 when value is 10.4 and decimals is 0', () => {

    expect(toDecimals(10.4))
      .toBe(10);

  });

  test('it returns 11 when value is 10.5 and decimals is 0', () => {

    expect(toDecimals(10.5))
      .toBe(11);

  });

  test('it returns 11 when value is 10.6 and decimals is 0', () => {

    expect(toDecimals(10.6))
      .toBe(11);

  });

  test('it returns 11 when value is 10.7 and decimals is 0', () => {

    expect(toDecimals(10.7))
      .toBe(11);

  });

  test('it returns 11 when value is 10.8 and decimals is 0', () => {

    expect(toDecimals(10.8))
      .toBe(11);

  });

  test('it returns 11 when value is 10.9 and decimals is 0', () => {

    expect(toDecimals(10.9))
      .toBe(11);

  });

  test('it returns 0.33 when value is 1/3 and decimals is 2', () => {

    expect(toDecimals(1 / 3, 2))
      .toBe(0.33);

  });

});

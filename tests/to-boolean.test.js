'use strict';

const { toBoolean } = require('../dist/index.cjs');

describe('toBoolean', () => {

  test('it returns true when value is "true"', () => {

    expect(toBoolean('true'))
      .toBe(true);

  });

  test('it returns false when value is "false"', () => {

    expect(toBoolean('false'))
      .toBe(false);

  });

  test('it returns true when value is truthy', () => {

    expect(toBoolean(1))
      .toBe(true);

  });

  test('it returns false when value is falsy', () => {

    expect(toBoolean(0))
      .toBe(false);

  });

  test('it returns null when value is undefined', () => {

    expect(toBoolean())
      .toBe(null);

  });

});

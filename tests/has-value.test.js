'use strict';

const { hasValue } = require('../dist/index.cjs');

describe('hasValue', () => {

  test('it finds value 1 when obj is [1]', () => {

    expect(hasValue([1], 1))
      .toBe(true);

  });

  test('it does not find value 2 when obj is [1]', () => {

    expect(hasValue([1], 2))
      .toBe(false);

  });

  test('it finds value 1 when obj is { a: 1 }', () => {

    expect(hasValue({ a: 1 }, 1))
      .toBe(true);

  });

  test('it does not find value 2 when obj is { a: 1 }', () => {

    expect(hasValue({ a: 1 }, 2))
      .toBe(false);

  });

});

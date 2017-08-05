'use strict';

const { isEqual } = require('../dist/index.cjs');

describe('isEqual', () => {

  test('it returns true when value 1 is "string" and value 2 is "string"', () => {

    expect(isEqual('string', 'string'))
      .toBe(true);

  });

  test('it returns false when value 1 is ["a", "b", "c"] and value 2 is ["a", "b", "c"]', () => {

    // Objects are passed by reference.
    expect(isEqual(['a', 'b', 'c'], ['a', 'b', 'c']))
      .toBe(false);

  });

  test('it returns false when value 1 is { a: 1, b: 2, c: 3 } and value 2 is { a: 1, b: 2, c: 3 }', () => {

    // Objects are passed by reference.
    expect(isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }))
      .toBe(false);

  });

  test('it returns true when value 1 is 0 and value 2 is 0', () => {

    expect(isEqual(0, 0))
      .toBe(true);

  });

  test('it returns false when value 1 is 0 and value 2 is -0', () => {

    expect(isEqual(0, -0))
      .toBe(false);

  });

  test('it returns true when value 1 is undefined and value 2 is undefined', () => {

    expect(isEqual())
      .toBe(true);

  });

  test('it returns true when value 1 is null and value 2 is null', () => {

    expect(isEqual(null, null))
      .toBe(true);

  });

  test('it returns true when value 1 is NaN and value 2 is NaN', () => {

    expect(isEqual(NaN, NaN))
      .toBe(true);

  });

});

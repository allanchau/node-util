'use strict';

const { isEqual } = require('../../dist');

describe('isEqual', () => {

  test('string and string to be equal', () => {

    expect(isEqual('string', 'string'))
      .toBe(true);

  });

  test('["a", "b", "c"] and ["a", "b", "c"] not to be equal', () => {

    // Objects are passed by reference.
    expect(isEqual(['a', 'b', 'c'], ['a', 'b', 'c']))
      .toBe(false);

  });

  test('{ a: 1, b: 2, c: 3 } and { a: 1, b: 2, c: 3 } not to be equal', () => {

    // Objects are passed by reference.
    expect(isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }))
      .toBe(false);

  });

  test('0 and 0 to be equal', () => {

    expect(isEqual(0, 0))
      .toBe(true);

  });

  test('0 and -0 not to be equal', () => {

    expect(isEqual(0, -0))
      .toBe(false);

  });

  test('undefined and undefined to be equal', () => {

    expect(isEqual())
      .toBe(true);

  });

  test('null and null to be equal', () => {

    expect(isEqual(null, null))
      .toBe(true);

  });

  test('NaN and NaN to be equal', () => {

    expect(isEqual(NaN, NaN))
      .toBe(true);

  });

});

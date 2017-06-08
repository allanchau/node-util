'use strict';

const { hasValue } = require('../../dist/has');

describe('hasValue', () => {

  test('[1] to have value 1', () => {

    expect(hasValue([1], 1))
      .toBe(true);

  });

  test('[1] to not have value 2', () => {

    expect(hasValue([1], 2))
      .toBe(false);

  });

  test('{ a: 1 } to have value 1', () => {

    expect(hasValue({ a: 1 }, 1))
      .toBe(true);

  });

  test('{ a: 1 } to not have value 2', () => {

    expect(hasValue({ a: 1 }, 2))
      .toBe(false);

  });

});

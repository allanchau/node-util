'use strict';

const { isArray } = require('../dist/index.cjs');

describe('isArray', () => {

  test('it returns true when obj is []', () => {

    expect(isArray([]))
      .toBe(true);

  });

  test('it returns false when obj is {}', () => {

    expect(isArray({}))
      .toBe(false);

  });

  test('it returns false when obj is "string"', () => {

    expect(isArray('string'))
      .toBe(false);

  });

  test('it returns false when obj is undefined', () => {

    expect(isArray())
      .toBe(false);

  });

  test('it returns false when obj is null', () => {

    expect(isArray(null))
      .toBe(false);

  });

});

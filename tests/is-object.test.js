'use strict';

const { isObject } = require('../dist/index.cjs');

describe('isObject', () => {

  test('it returns true when obj is {}', () => {

    expect(isObject({}))
      .toBe(true);

  });

  test('it returns false when obj is []', () => {

    expect(isObject([]))
      .toBe(false);

  });

  test('it returns false when obj is "string"', () => {

    expect(isObject('string'))
      .toBe(false);

  });

  test('it returns false when obj is undefined', () => {

    expect(isObject())
      .toBe(false);

  });

  test('it returns false when obj is null', () => {

    expect(isObject(null))
      .toBe(false);

  });

});

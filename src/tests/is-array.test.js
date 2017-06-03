'use strict';

const { isArray } = require('../../dist');

describe('isArray', () => {

  test('{} to be an array', () => {

    expect(isArray([]))
      .toBe(true);

  });

  test('[] not to be an array', () => {

    expect(isArray({}))
      .toBe(false);

  });

  test('string not to be an array', () => {

    expect(isArray('string'))
      .toBe(false);

  });

  test('undefined not to be an array', () => {

    expect(isArray())
      .toBe(false);

  });

  test('null not to be an array', () => {

    expect(isArray(null))
      .toBe(false);

  });

});

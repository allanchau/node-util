'use strict';

const { isObject } = require('../../dist/is');

describe('isObject', () => {

  test('{} to be an object', () => {

    expect(isObject({}))
      .toBe(true);

  });

  test('[] not to be an object', () => {

    expect(isObject([]))
      .toBe(false);

  });

  test('string not to be an object', () => {

    expect(isObject('string'))
      .toBe(false);

  });

  test('undefined not to be an object', () => {

    expect(isObject())
      .toBe(false);

  });

  test('null not to be an object', () => {

    expect(isObject(null))
      .toBe(false);

  });

});

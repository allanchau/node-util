'use strict';

const { hasProperty } = require('../dist/has');

describe('hasProperty', () => {

  test('it finds property a when obj is { a: 1 }', () => {

    expect(hasProperty({ a: 1 }, 'a'))
      .toBe(true);

  });

  test('it does not find property b when obj is { a: 1 }', () => {

    expect(hasProperty({ a: 1 }, 'b'))
      .toBe(false);

  });

});

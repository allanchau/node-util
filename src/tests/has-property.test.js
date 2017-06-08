'use strict';

const { hasProperty } = require('../../dist/has');

describe('hasProperty', () => {

  test('{ a: 1 } to have property a', () => {

    expect(hasProperty({ a: 1 }, 'a'))
      .toBe(true);

  });

  test('{ a: 1 } to not have property b', () => {

    expect(hasProperty({ a: 1 }, 'b'))
      .toBe(false);

  });

});

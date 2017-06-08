'use strict';

const { toFlatArray } = require('../../dist/to');

describe('toFlatArray', () => {

  test('reduces all values into an array', () => {

    expect(JSON.stringify(toFlatArray({ a: { b: [{ c: [{ d: 1 }] }] } })))
      .toBe(JSON.stringify([1]));

  });

  test('reduces all values into an array', () => {

    expect(JSON.stringify(toFlatArray({ a: [{ b: 1 }, { c: 2 }, { d: [3, 4] }] })))
      .toBe(JSON.stringify([1, 2, 3, 4]));

  });

});

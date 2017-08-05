'use strict';

const { toFlatArray } = require('../dist/index.cjs');

describe('toFlatArray', () => {

  test('it returns [1] when obj is { a: { b: [{ c: [{ d: 1 }] }] } }', () => {

    expect(JSON.stringify(toFlatArray({ a: { b: [{ c: [{ d: 1 }] }] } })))
      .toBe(JSON.stringify([1]));

  });

  test('it returns [1, 2, 3, 4] when obj is { a: [{ b: 1 }, { c: 2 }, { d: [3, 4] }] }', () => {

    expect(JSON.stringify(toFlatArray({ a: [{ b: 1 }, { c: 2 }, { d: [3, 4] }] })))
      .toBe(JSON.stringify([1, 2, 3, 4]));

  });

});

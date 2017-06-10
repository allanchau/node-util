'use strict';

const { expect } = require('chai');
const { toFlatArray } = require('../../dist/to');

describe('toFlatArray', function () {

  it('should return [1] when obj is { a: { b: [{ c: [{ d: 1 }] }] } }', function () {

    expect(JSON.stringify(toFlatArray({ a: { b: [{ c: [{ d: 1 }] }] } })))
      .to
      .equal(JSON.stringify([1]));

  });

  it('should return [1, 2, 3, 4] when obj is { a: [{ b: 1 }, { c: 2 }, { d: [3, 4] }] }', function () {

    expect(JSON.stringify(toFlatArray({ a: [{ b: 1 }, { c: 2 }, { d: [3, 4] }] })))
      .to
      .equal(JSON.stringify([1, 2, 3, 4]));

  });

});

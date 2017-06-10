'use strict';

const { expect } = require('chai');
const { isEqual } = require('../../dist/is');

describe('isEqual', function () {

  it('should return true when value 1 is "string" and value 2 is "string"', function () {

    expect(isEqual('string', 'string'))
      .to
      .equal(true);

  });

  it('should return false when value 1 is ["a", "b", "c"] and value 2 is ["a", "b", "c"]', function () {

    // Objects are passed by reference.
    expect(isEqual(['a', 'b', 'c'], ['a', 'b', 'c']))
      .to
      .equal(false);

  });

  it('should return false when value 1 is { a: 1, b: 2, c: 3 } and value 2 is { a: 1, b: 2, c: 3 }', function () {

    // Objects are passed by reference.
    expect(isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }))
      .to
      .equal(false);

  });

  it('should return true when value 1 is 0 and value 2 is 0', function () {

    expect(isEqual(0, 0))
      .to
      .equal(true);

  });

  it('should return false when value 1 is 0 and value 2 is -0', function () {

    expect(isEqual(0, -0))
      .to
      .equal(false);

  });

  it('should return true when value 1 is undefined and value 2 is undefined', function () {

    expect(isEqual())
      .to
      .equal(true);

  });

  it('should return true when value 1 is null and value 2 is null', function () {

    expect(isEqual(null, null))
      .to
      .equal(true);

  });

  it('should return true when value 1 is NaN and value 2 is NaN', function () {

    expect(isEqual(NaN, NaN))
      .to
      .equal(true);

  });

});

'use strict';

const { expect } = require('chai');
const { hasValue } = require('../../dist/has');

describe('hasValue', function () {

  it('should find value 1 when obj is [1]', function () {

    expect(hasValue([1], 1))
      .to
      .equal(true);

  });

  it('should not find value 2 when obj is [1]', function () {

    expect(hasValue([1], 2))
      .to
      .equal(false);

  });

  it('should find value 1 when obj is { a: 1 }', function () {

    expect(hasValue({ a: 1 }, 1))
      .to
      .equal(true);

  });

  it('should not find value 2 when obj is { a: 1 }', function () {

    expect(hasValue({ a: 1 }, 2))
      .to
      .equal(false);

  });

});

'use strict';

const { expect } = require('chai');
const { find } = require('../../dist/find');

describe('find', function () {

  it('should find 1 when obj is [1] and fn is element => element === 1', function () {

    expect(find([1], element => element === 1))
      .to
      .equal(1);

  });

  it('should find 1 when obj is [1] and fn is element => element === 2', function () {

    expect(find([1], element => element === 2))
      .to
      .equal();

  });

  it('should find 1 when obj is { a: { b: [1] } } and fn is element => element === 1', function () {

    expect(find({ a: { b: [1] } }, element => element === 1))
      .to
      .equal(1);

  });

});

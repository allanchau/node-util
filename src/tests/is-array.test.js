'use strict';

const { expect } = require('chai');
const { isArray } = require('../../dist/is');

describe('isArray', function () {

  it('should return true when obj is []', function () {

    expect(isArray([]))
      .to
      .equal(true);

  });

  it('should return false when obj is {}', function () {

    expect(isArray({}))
      .to
      .equal(false);

  });

  it('should return false when obj is "string"', function () {

    expect(isArray('string'))
      .to
      .equal(false);

  });

  it('should return false when obj is undefined', function () {

    expect(isArray())
      .to
      .equal(false);

  });

  it('should return false when obj is null', function () {

    expect(isArray(null))
      .to
      .equal(false);

  });

});

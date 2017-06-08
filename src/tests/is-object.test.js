'use strict';

const { expect } = require('chai');
const { isObject } = require('../../dist/is');

describe('isObject', function () {

  it('should return true when obj is {}', function () {

    expect(isObject({}))
      .to
      .equal(true);

  });

  it('should return false when obj is []', function () {

    expect(isObject([]))
      .to
      .equal(false);

  });

  it('should return false when obj is "string"', function () {

    expect(isObject('string'))
      .to
      .equal(false);

  });

  it('should return false when obj is undefined', function () {

    expect(isObject())
      .to
      .equal(false);

  });

  it('should return false when obj is null', function () {

    expect(isObject(null))
      .to
      .equal(false);

  });

});

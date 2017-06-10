'use strict';

const { expect } = require('chai');
const { isBeta } = require('../../dist/is');

describe('isBeta', function () {

  it('should return true when environment is beta', function () {

    // Simulate ENV in node.
    const env = 'beta';

    expect(isBeta(env))
      .to
      .equal(true);

  });

  it('should return true when environment is beta', function () {

    // Simulate ENV in node.
    const env = 'BeTa';

    expect(isBeta(env))
      .to
      .equal(true);

  });

  it('should return false when environment is not beta', function () {

    const env = 'test';

    expect(isBeta(env))
      .to
      .equal(false);

  });

});

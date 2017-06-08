'use strict';

const { expect } = require('chai');
const { isAlpha } = require('../../dist/is');

describe('isAlpha', function () {

  it('should return true when environment is alpha', function () {

    // Simulate ENV in node.
    const env = 'alpha';

    expect(isAlpha(env))
      .to
      .equal(true);

  });

  it('should return true when environment is alpha', function () {

    // Simulate ENV in node.
    const env = 'AlPhA';

    expect(isAlpha(env))
      .to
      .equal(true);

  });

  it('should return false when environment is not alpha', function () {

    const env = 'test';

    expect(isAlpha(env))
      .to
      .equal(false);

  });

});

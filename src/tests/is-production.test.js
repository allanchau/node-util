'use strict';

const { expect } = require('chai');
const { isProduction } = require('../../dist/is');

describe('isProduction', function () {

  it('should return true when environment is production', function () {

    // Simulate ENV in node.
    const env = 'production';

    expect(isProduction(env))
      .to
      .equal(true);

  });

  it('should return true when environment is production', function () {

    // Simulate ENV in node.
    const env = 'PrOdUcTiOn';

    expect(isProduction(env))
      .to
      .equal(true);

  });

  it('should return false when environment is not production', function () {

    const env = 'test';

    expect(isProduction(env))
      .to
      .equal(false);

  });

});

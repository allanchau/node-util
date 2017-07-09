'use strict';

const { isProduction } = require('../dist/is');

describe('isProduction', () => {

  test('it returns true when environment is production', () => {

    // Simulate ENV in node.
    const env = 'production';

    expect(isProduction(env))
      .toBe(true);

  });

  test('it returns true when environment is production', () => {

    // Simulate ENV in node.
    const env = 'PrOdUcTiOn';

    expect(isProduction(env))
      .toBe(true);

  });

  test('it returns false when environment is not production', () => {

    const env = 'test';

    expect(isProduction(env))
      .toBe(false);

  });

});

'use strict';

const { isProduction } = require('../../dist');

describe('isProduction', () => {

  test('environment to equal production', () => {

    // Simulate ENV in node.
    const env = 'production';

    expect(isProduction(env))
      .toBe(true);

  });

  test('environment to equal production', () => {

    // Simulate ENV in node.
    const env = 'PrOdUcTiOn';

    expect(isProduction(env))
      .toBe(true);

  });

  test('environment not to equal production', () => {

    const env = 'test';

    expect(isProduction(env))
      .toBe(false);

  });

});

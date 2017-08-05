'use strict';

const { isAlpha } = require('../dist/index.cjs');

describe('isAlpha', () => {

  test('it returns true when environment is alpha', () => {

    // Simulate ENV in node.
    const env = 'alpha';

    expect(isAlpha(env))
      .toBe(true);

  });

  test('it returns true when environment is alpha', () => {

    // Simulate ENV in node.
    const env = 'AlPhA';

    expect(isAlpha(env))
      .toBe(true);

  });

  test('it returns false when environment is not alpha', () => {

    const env = 'test';

    expect(isAlpha(env))
      .toBe(false);

  });

});

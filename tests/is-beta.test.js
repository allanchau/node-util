'use strict';

const { isBeta } = require('../dist/is');

describe('isBeta', () => {

  test('it returns true when environment is beta', () => {

    // Simulate ENV in node.
    const env = 'beta';

    expect(isBeta(env))
      .toBe(true);

  });

  test('it returns true when environment is beta', () => {

    // Simulate ENV in node.
    const env = 'BeTa';

    expect(isBeta(env))
      .toBe(true);

  });

  test('it returns false when environment is not beta', () => {

    const env = 'test';

    expect(isBeta(env))
      .toBe(false);

  });

});

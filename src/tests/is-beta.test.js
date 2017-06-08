'use strict';

const { isBeta } = require('../../dist/is');

describe('isBeta', () => {

  test('environment to equal beta', () => {

    // Simulate ENV in node.
    const env = 'beta';

    expect(isBeta(env))
      .toBe(true);

  });

  test('environment to equal beta', () => {

    // Simulate ENV in node.
    const env = 'BeTa';

    expect(isBeta(env))
      .toBe(true);

  });

  test('environment not to equal beta', () => {

    const env = 'test';

    expect(isBeta(env))
      .toBe(false);

  });

});

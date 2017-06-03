'use strict';

const { isAlpha } = require('../../dist');

describe('isAlpha', () => {

  test('environment to equal alpha', () => {

    // Simulate ENV in node.
    const env = 'alpha';

    expect(isAlpha(env))
      .toBe(true);

  });

  test('environment to equal alpha', () => {

    // Simulate ENV in node.
    const env = 'AlPhA';

    expect(isAlpha(env))
      .toBe(true);

  });

  test('environment not to equal alpha', () => {

    const env = 'test';

    expect(isAlpha(env))
      .toBe(false);

  });

});

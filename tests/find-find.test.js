'use strict';

const { find } = require('../dist/find');

describe('find', () => {

  test('it finds 1 when obj is [1] and fn is element => element === 1', () => {

    expect(find([1], element => element === 1))
      .toBe(1);

  });

  test('it finds 1 when obj is [1] and fn is element => element === 2', () => {

    expect(find([1], element => element === 2))
      .toBe();

  });

  test('it finds 1 when obj is { a: { b: [1] } } and fn is element => element === 1', () => {

    expect(find({ a: { b: [1] } }, element => element === 1))
      .toBe(1);

  });

});

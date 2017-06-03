'use strict';

const { find } = require('../../dist');

describe('find', () => {

  test('[1] to find value 1', () => {

    expect(find([1], element => element === 1))
      .toBe(1);

  });

  test('[1] to not find value 2', () => {

    expect(find([1], element => element === 2))
      .toBe();

  });

  test('{ a: { b: [1] } } to find value 1', () => {

    expect(find({ a: { b: [1] } }, element => element === 1))
      .toBe(1);

  });

});

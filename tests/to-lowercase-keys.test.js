'use strict';

const { toLowercaseKeys } = require('../dist/index.cjs');

describe('toLowercaseKeys', () => {

  test('it returns { a: { b: [{ c: [{ d: 1 }] }] } } when obj is { A: { B: [{ C: [{ D: 1 }] }] } }', () => {

    expect(JSON.stringify(toLowercaseKeys({ A: { B: [{ C: [{ D: 1 }] }] } })))
      .toBe(JSON.stringify({ a: { b: [{ c: [{ d: 1 }] }] } }));

  });

});

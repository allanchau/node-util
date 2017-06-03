'use strict';

const { toLowercaseKeys } = require('../../dist');

describe('toLowercaseKeys', () => {

  test('converts all keys to lowercase', () => {

    expect(JSON.stringify(toLowercaseKeys({ A: { B: [{ C: [{ D: 1 }] }] } })))
      .toBe(JSON.stringify({ a: { b: [{ c: [{ d: 1 }] }] } }));

  });

});

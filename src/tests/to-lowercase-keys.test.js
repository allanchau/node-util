'use strict';

const { expect } = require('chai');
const { toLowercaseKeys } = require('../../dist/to');

describe('toLowercaseKeys', function () {

  it('should return { a: { b: [{ c: [{ d: 1 }] }] } } when obj is { A: { B: [{ C: [{ D: 1 }] }] } }', function () {

    expect(JSON.stringify(toLowercaseKeys({ A: { B: [{ C: [{ D: 1 }] }] } })))
      .to
      .equal(JSON.stringify({ a: { b: [{ c: [{ d: 1 }] }] } }));

  });

});

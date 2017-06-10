'use strict';

const { expect } = require('chai');
const { hasProperty } = require('../../dist/has');

describe('hasProperty', function () {

  it('should find property a when obj is { a: 1 }', function () {

    expect(hasProperty({ a: 1 }, 'a'))
      .to
      .equal(true);

  });

  it('should not find property b when obj is { a: 1 }', function () {

    expect(hasProperty({ a: 1 }, 'b'))
      .to
      .equal(false);

  });

});

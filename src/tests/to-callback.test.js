'use strict';

const { toCallback } = require('../../dist');

describe('toPromise', () => {

  test('converts a promise into a standard callback', (done) => {

    const promiseFunction = data => Promise.resolve(data);
    const callbackFunction = toCallback(promiseFunction);

    callbackFunction('callback', (err, result) => {

      expect(result)
        .toBe('callback');
      done();

    });

  });

});

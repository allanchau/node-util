'use strict';

const { toCallback } = require('../../dist/to');

describe('toPromise', () => {

  test('converts a promise into a standard callback', (done) => {

    const promiseFunction = data => Promise.resolve(data);
    const callbackFunction = toCallback(promiseFunction);

    callbackFunction('callback', (err, result) => {

      if (err) {
        return done();
      }

      expect(result)
        .toBe('callback');

      return done();

    });

  });

  test('converts a promise into a standard callback', (done) => {

    const error = new Error('error');
    const promiseFunction = () => Promise.reject(error);
    const callbackFunction = toCallback(promiseFunction);

    callbackFunction('callback', (err) => {

      if (err) {

        expect(err)
          .toBe(error);

      }

      done();

    });

  });

});

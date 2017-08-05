'use strict';

const { toCallback } = require('../dist/index.cjs');

describe('toPromise', () => {

  test('it converts a promise into a standard callback', (done) => {

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

  test('it converts a promise into a standard callback', (done) => {

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

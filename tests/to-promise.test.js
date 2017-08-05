'use strict';

const { toPromise } = require('../dist/index.cjs');

describe('toPromise', () => {

  test('it converts a standard callback into a promise', () => {

    const callbackFunction = (data, callback) => callback(null, data);
    const promiseFunction = toPromise(callbackFunction);

    return promiseFunction('promised!')
      .then((data) => {

        return expect(data)
          .toBe('promised!');

      });

  });

  test('it converts a standard callback into a promise', () => {

    const error = new Error('error');
    const callbackFunction = (data, callback) => callback(error, data);
    const promiseFunction = toPromise(callbackFunction);

    return promiseFunction('promised!')
      .catch((err) => {

        return expect(err)
          .toBe(error);

      });

  });

});

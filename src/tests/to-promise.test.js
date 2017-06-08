'use strict';

const { toPromise } = require('../../dist/to');

describe('toPromise', () => {

  test('converts a standard callback into a promise', () => {

    const callbackFunction = (data, callback) => callback(null, data);
    const promiseFunction = toPromise(callbackFunction);

    expect.assertions(1);

    return promiseFunction('promised!')
      .then((data) => {

        return expect(data)
          .toBe('promised!');

      });

  });

  test('converts a standard callback into a promise', () => {

    const error = new Error('error');
    const callbackFunction = (data, callback) => callback(error, data);
    const promiseFunction = toPromise(callbackFunction);

    expect.assertions(1);

    return promiseFunction('promised!')
      .catch((err) => {

        return expect(err)
          .toBe(error);

      });

  });

});

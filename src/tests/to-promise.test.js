'use strict';

const { toPromise } = require('../../dist');

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

});

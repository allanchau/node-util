'use strict';

const { expect } = require('chai');
const { toPromise } = require('../../dist/to');

describe('toPromise', function () {

  it('should convert a standard callback into a promise', function () {

    const callbackFunction = (data, callback) => callback(null, data);
    const promiseFunction = toPromise(callbackFunction);

    return promiseFunction('promised!')
      .then((data) => {

        return expect(data)
          .to
          .equal('promised!');

      });

  });

  it('should convert a standard callback into a promise', function () {

    const error = new Error('error');
    const callbackFunction = (data, callback) => callback(error, data);
    const promiseFunction = toPromise(callbackFunction);

    return promiseFunction('promised!')
      .catch((err) => {

        return expect(err)
          .to
          .equal(error);

      });

  });

});

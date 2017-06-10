'use strict';

const { expect } = require('chai');
const { toCallback } = require('../../dist/to');

describe('toPromise', function () {

  it('should convert a promise into a standard callback', function (done) {

    const promiseFunction = data => Promise.resolve(data);
    const callbackFunction = toCallback(promiseFunction);

    callbackFunction('callback', (err, result) => {

      if (err) {
        return done();
      }

      expect(result)
        .to
        .equal('callback');

      return done();

    });

  });

  it('should convert a promise into a standard callback', function (done) {

    const error = new Error('error');
    const promiseFunction = () => Promise.reject(error);
    const callbackFunction = toCallback(promiseFunction);

    callbackFunction('callback', (err) => {

      if (err) {

        expect(err)
          .to
          .equal(error);

      }

      done();

    });

  });

});

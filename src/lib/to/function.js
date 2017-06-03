/**
 * Convert a promise into a node style callback.
 * @this func
 * @param {Function} func Function to turn into a node style callback.
 * @return {Promise} Promise as a node style callback.
 */
export const toCallback = function toCallback(func) {

  const startIndex = 0;
  const endIndex = 1;

  return (...args) => {

    const callback = args[args.length - endIndex];
    const onlyArgs = args.slice(startIndex, args.length - endIndex);

    func.apply(this, onlyArgs)
      .then(data => callback(null, data))
      .catch(err => callback(err));

  };

};

/**
 * Convert a node style callback into a promise.
 * @this func
 * @param {Function} func Function to turn into a promise.
 * @return {Promise} Callback as a promise.
 */
export const toPromise = function toPromise(func) {

  return (...args) => new Promise((resolve, reject) => {

    const callback = (err, result) => {

      if (err) {
        return reject(err);
      }

      return resolve(result);

    };

    func.apply(this, [...args, callback]);

  });

};

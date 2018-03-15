'use strict';

const bundles = require('./bundles');
const fs = require('fs');
const rimraf = require('rimraf');
const { rollup } = require('rollup');

/**
 * The dist path.
 * @type {String}
 */
const distPath = 'dist';

/**
 * Create a bundle.
 * @param {Object} bundle A Rollup bundle object.
 * @return {Void} Creates the bundle file.
 */
const createBundle = bundle => new Promise((resolve, reject) => {

  rollup({
    input: bundle.input,
    plugins: bundle.plugins,
  })
    .then(result => resolve(result.write({
      file: bundle.output,
      format: bundle.format,
      name: bundle.name,
      sourcemap: bundle.sourcemap,
    })))
    .catch(reject);

});

/**
 * Build the bundles.
 * @return {Void} Builds the bundles.
 */
const buildBundles = () => new Promise((resolve, reject) => {

  fs.mkdir(distPath, (err) => {

    if (err) {
      return reject(err);
    }

    return resolve(Promise.all(bundles.map(bundle => createBundle(bundle))));

  });

});

// Clear the dist directory and rebuild bundles.
rimraf(distPath, () => buildBundles());

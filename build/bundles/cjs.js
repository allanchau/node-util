'use strict';

const buble = require('rollup-plugin-buble');
const builtins = require('rollup-plugin-node-builtins');
const commonjs = require('rollup-plugin-commonjs');
const eslint = require('rollup-plugin-eslint');
const globals = require('rollup-plugin-node-globals');
const nodeResolve = require('rollup-plugin-node-resolve');

/**
 * Determine the bundle destination.
 * @return {String} Path to the bundle destination.
 */
const output = () => 'dist/index.cjs.js';

/**
 * Determine the bundle entry point.
 * @return {String} Path to the bundle entry point.
 */
const input = () => 'src/index.js';

module.exports = {
  format: 'cjs',
  input: input(),
  name: 'util',
  output: output(),
  plugins: [
    eslint(),
    globals(),
    builtins(),
    nodeResolve({ browser: true, jsnext: true }),
    commonjs(),
    buble(),
  ],
  sourcemap: false,
};

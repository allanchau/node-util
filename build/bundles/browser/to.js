'use strict';

const buble = require('rollup-plugin-buble');
const builtins = require('rollup-plugin-node-builtins');
const commonjs = require('rollup-plugin-commonjs');
const eslint = require('rollup-plugin-eslint');
const globals = require('rollup-plugin-node-globals');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');

/**
 * Determine the bundle destination.
 * @return {String} Path to the bundle destination.
 */
const output = () => 'dist/to/index.js';

/**
 * Determine the bundle entry point.
 * @return {String} Path to the bundle entry point.
 */
const input = () => 'src/lib/to/index.js';

module.exports = {
  format: 'iife',
  input: input(),
  name: 'to',
  output: output(),
  plugins: [
    eslint(),
    globals(),
    builtins(),
    nodeResolve({ browser: true, jsnext: true }),
    commonjs(),
    buble(),
    uglify(),
  ],
  sourcemap: true,
};

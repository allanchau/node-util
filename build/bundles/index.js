'use strict';

const browser = require('./browser');
const cjs = require('./node/cjs');
const esm = require('./node/esm');

module.exports = [].concat(browser, cjs, esm);

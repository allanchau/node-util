'use strict';

const browser = require('./browser');
const cjs = require('./cjs');
const es = require('./es');

module.exports = [].concat(browser, cjs, es);

'use strict';

const browser = require('./browser');
const node = require('./node');

module.exports = [].concat(browser, node);

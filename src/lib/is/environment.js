/**
 * Determine if the environment is alpha.
 * @param {String} str String to compare.
 * @return {Boolean} True if the environment is alpha.
 */
export const isAlpha = str => str.toLowerCase() === 'alpha';

/**
 * Determine if the environment is beta.
 * @param {String} str String to compare.
 * @return {Boolean} True if the environment is beta.
 */
export const isBeta = str => str.toLowerCase() === 'beta';

/**
 * Determine if the environment is production.
 * @param {String} str String to compare.
 * @return {Boolean} True if the environment is production.
 */
export const isProduction = str => str.toLowerCase() === 'production';

/**
 * Test if the object is an array.
 * @param {Array} arr Array to test.
 * @return {Boolean} True if the object is an array.
 */
export const isArray = arr => Array.isArray(arr);

/**
 * Check if 2 values are equal.
 * @param {Any} value1 First value.
 * @param {Any} value2 Second value.
 * @return {Boolean} True if the two values are equal.
 */
export const isEqual = (value1, value2) => Object.is(value1, value2);

/**
 * Test if an object is really an object.
 * @param {Object} obj An object.
 * @return {Boolean} True if the object is really an object.
 */
export const isObject = obj => !isEqual(obj, null) && !isArray(obj) && obj === Object(obj);

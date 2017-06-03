import { toFlatArray } from '../to';

const { hasOwnProperty } = Object.prototype;

/**
 * Check if an object has the specified property.
 * @param {Object} obj Object to check.
 * @param {String} property Property to check for.
 * @return {Boolean} True if the object has the specified property.
 */
export const hasProperty = (obj, property) => hasOwnProperty.call(obj, property);

/**
 * Check if an object has the specified value.
 * @param {Array|Object} obj Array or Object to check.
 * @param {Any} value Value to check for.
 * @return {Boolean} True if the object has the specified value.
 */
export const hasValue = (obj, value) => {

  return toFlatArray(obj)
    .includes(value);

};

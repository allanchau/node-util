import { isArray, isObject } from '../is';

/**
 * Flatten an array.
 * @param {Array|Object} obj Array or Object to convert.
 * @return {Array} The converted Array or Object.
 */
export const toFlatArray = (obj) => {

  const keys = Object.keys(obj);

  return [].concat(keys.reduce((element, index) => {

    const value = obj[index];
    const newValue = (isArray(value) || isObject(value)) ? toFlatArray(value) : value;

    return element.concat(newValue);

  }, []));

};

/**
 * Convert object keys to lowercase.
 * @param {Object} obj An object.
 * @return {Object} Returns an object with lowercase keys.
 */
export const toLowercaseKeys = (obj) => {

  const keys = Object.keys(obj);

  return keys.reduce((element, index) => {

    const value = obj[index];
    const newValue = (isArray(value) || isObject(value)) ? toLowercaseKeys(value) : value;
    const lowercaseKey = (typeof index === 'string') ? index.toString()
      .toLowerCase() : index;

    element[lowercaseKey] = newValue;

    return element;

  }, isObject(obj) ? {} : []);

};

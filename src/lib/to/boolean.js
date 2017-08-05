/**
 * Convert something to a boolean value.
 * @param {Any} value A value to try and convert.
 * @return {Boolean} Returns a boolean value or null.
 */
export const toBoolean = (value) => {

  if (value === null || typeof value === 'undefined') {
    return null;
  }

  if (value === 'false') {
    return false;
  }

  if (value) {
    return true;
  }

  return false;

};

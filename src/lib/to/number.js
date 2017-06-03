const zero = 0;

/**
 * Round a number to the specified significant digits.
 * @param {Number} value Value to round.
 * @param {Number} [decimals=zero] Decimals to round to.
 * @return {Number} Returns the rounded number.
 */
export const toDecimals = (value, decimals = zero) => {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
};

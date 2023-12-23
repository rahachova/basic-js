const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function countSum(digit) {
  return digit
    .toString()
    .split("")
    .reduce((accum, item) => {
      return (accum += Number(item));
    }, 0);
}

function getSumOfDigits(n) {
  const result = countSum(n);
  if (result.toString().length > 1) {
    return countSum(result);
  }
  return result;
}

module.exports = {
  getSumOfDigits,
};

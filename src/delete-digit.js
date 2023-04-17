const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitsString = String(n)
  const digits = digitsString.split('')
  const numbers = digits.map((digit, index) => {
    return digitsString.slice(0, index) + digitsString.slice(index + 1)
  })

  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};

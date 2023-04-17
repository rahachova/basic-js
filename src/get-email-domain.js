const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const array = email.split('')
  const result = array.slice()
  const lastIndex = result.lastIndexOf('@')
  result.splice(result[0], lastIndex + 1)
  return result.join('')
}

module.exports = {
  getEmailDomain
};

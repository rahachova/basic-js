const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let catQuantity = 0
  array.forEach(element => {
    element.forEach(item => {
      if(item === '^^') {
        catQuantity += 1
      }})
  })
  return catQuantity
}

module.exports = {
  countCats
};

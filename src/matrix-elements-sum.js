const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2], //0
 *  [0, 5, 0, 0], //1
 *  [2, 0, 3, 3] //2
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0
  matrix.forEach((item, index) =>
    item.forEach((innerItem, innerIndex) => {
      if(index === 0 || matrix[index - 1][innerIndex] !== 0) {
        counter += innerItem
      }
    })
  )
  return counter
}

module.exports = {
  getMatrixElementsSum
};

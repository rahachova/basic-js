const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let isNeedDoubleNext = false
  let isNeedDiscardNext = false
  const discardedItems = {}
  const result = []
  const controls = {
    '--discard-next': () => {isNeedDiscardNext = true},
    '--discard-prev': (index) => {
      if (result.length && !discardedItems[index - 1]) {
        result.pop()
      }
    },
    '--double-next': () => isNeedDoubleNext = true,
    '--double-prev': (index) => {
      if (result.length && !discardedItems[index - 1]) {
        result.push(result[result.length - 1])
      }
    }
  }
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  arr.forEach((item, index) => {
    if(controls[item]) {
      controls[item](index)
    } else if(isNeedDoubleNext) {
      result.push(item, item)
      isNeedDoubleNext = false
    } else if(isNeedDiscardNext) {
      discardedItems[index] = true
      isNeedDiscardNext = false
    } else {
      result.push(item)
    }
  })
  return result
}

module.exports = {
  transform
};

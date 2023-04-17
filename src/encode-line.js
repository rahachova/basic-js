const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
   const series = []
   let tempSerie
   const array = str.split('')
   array.forEach((item, index) => {
    if(index === 0) {
      tempSerie = {
        char: item,
        quantity: 1
      }
    } else if (item !== array[index - 1]) {
      series.push(tempSerie)
      tempSerie = {
        char: item,
        quantity: 1
      }
    } else {
      tempSerie.quantity++
    }
   })
   series.push(tempSerie)
   let result = series.map(element => {
    if(element) {
     return Object.values(element).reverse().filter(item => item !== 1).join('')
    } else {
      return ''
    }
   })
   return result.join('')
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const log = 0.693
  const k = log / HALF_LIFE_PERIOD
  if(typeof(sampleActivity) === 'string' && typeof(Number(sampleActivity)) === 'number' && Number(sampleActivity) > 0 && Number(sampleActivity) <= 15) {
    let t = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) / k))
    return t
  } else {
    return false
  }
}

module.exports = {
  dateSample
};

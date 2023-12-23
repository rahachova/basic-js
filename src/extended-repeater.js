const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  const {
    repeatTimes = 1,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  const separatorToUse = separator || "+";
  const additionToUse = createAddition(
    addition,
    additionRepeatTimes,
    additionSeparator
  );

  for (let index = 0; index < repeatTimes; index++) {
    const isNeedToAddSeparator = index !== repeatTimes - 1;
    result +=
      str + additionToUse + (isNeedToAddSeparator ? separatorToUse : "");
  }
  return result;
}

function createAddition(addition, additionRepeatTimes, additionSeparator) {
  let additionResult = "";
  const additionSeparatorToUse = additionSeparator || "|";
  if (addition === undefined) {
    return "";
  }
  if (!additionRepeatTimes) {
    return addition;
  }
  for (let index = 0; index < additionRepeatTimes; index++) {
    const isNeedToAddSeparator = index !== additionRepeatTimes - 1;
    additionResult +=
      addition + (isNeedToAddSeparator ? additionSeparatorToUse : "");
  }
  return additionResult;
}

console.log(repeater("12345", { repeatTimes: 5 }));

module.exports = {
  repeater,
};

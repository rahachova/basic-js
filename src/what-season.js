const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.keys(date).length) {
    throw new Error("Invalid date!");
  }

  let monthNumber = date.getMonth();
  let result;
  if (monthNumber <= 1 || monthNumber === 11) {
    result = "winter";
  } else if (monthNumber <= 4 && monthNumber >= 2) {
    result = "spring";
  } else if (monthNumber <= 7 && monthNumber >= 5) {
    result = "summer";
  } else if (monthNumber < 11 && monthNumber > 7) {
    result = "autumn (fall)";
  }
  return result;
}

module.exports = {
  getSeason,
};

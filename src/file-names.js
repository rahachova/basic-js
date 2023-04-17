const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  const result = []
  function changeCount(name, uniqueNames) {
    const quantity = uniqueNames[name] - 1
    return name + '(' + quantity + ')'
  }

  function addNewCount(name) {
    return name + '(1)'
  }

  const uniqueNames = {}
  names.forEach((name, index) => {
    console.log(name)
    if (uniqueNames[name] === 1) {
      uniqueNames[name]++
      result.push(addNewCount(name))
    } else if (uniqueNames[name] > 1) {
      uniqueNames[name] = uniqueNames[name] + 1
      result.push(changeCount(name, uniqueNames))
    } else {
      uniqueNames[name] = 1
      if (result.indexOf(name) !== -1) {
        result.push(addNewCount(name))
      } else {
        result.push(name)
      }
    }
  })
  return result
}

module.exports = {
  renameFiles
};

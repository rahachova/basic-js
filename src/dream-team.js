const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let result = members.map(element => {
      if(typeof(element) === 'string') {
        return element.trim()[0].toUpperCase()
      }
    }).filter((name) => name).sort((a, b) => {
      if(a < b) { return -1;}
      if(a > b) { return 1;}
      return 0;
    }).join('')
      return result
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};

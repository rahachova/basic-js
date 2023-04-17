const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length
  },
  addLink(value) {
    this.chainArray.push(value)
    return this
  },
  removeLink(position) {
    console.log(position)
    if (!Number.isInteger(position) || (this.chainArray.length < position) || position < 1) {
      this.chainArray = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chainArray = this.chainArray.filter((item, index) => {
      return (position - 1) !== index
    })
    return this
  },
  reverseChain() {
    this.chainArray.reverse()
    return this
  },
  finishChain() {
   const result = this.chainArray.reduce((acc, current, index) => {
      if(index === (this.chainArray.length - 1)) {
        return acc + `( ${current} )`
      } else {
        return acc + `( ${current} )~~`
      }
    }, '')
    this.chainArray = []
    return result
  }
};

module.exports = {
  chainMaker
};

const chainMaker = {
  chain: [],
  getLength() {

  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if ( position - 1 < 0 || this.chain.length < position  || !(typeof position === 'number')) {
      this.chain = [];
      throw `Position doesn't exist`;
    }

    this.chain.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;

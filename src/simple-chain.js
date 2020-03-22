const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || !position || position % 1 != 0 || position < 0) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  }
};

module.exports = chainMaker;

var _shuffle = require('lodash/shuffle');

export default class AppState {
  constructor(size) {
    this.size = size;
    this.initOrder = [];
    this.currentOrder = [];
    this.moves = 0;
  }

  calculateInitOrder() {
    let array = [];
    for (let i = 0; i < this.size; i++) {
      array.push(i);
    }
    this.initOrder = _shuffle(array);
    this.currentOrder = this.initOrder;
    return this.initOrder;
  }
}

var _shuffle = require('lodash/shuffle');

export default class AppState {
  constructor(size) {
    this.size = size;
    this.initOrder = [];
    this.currentOrder = [];
    this.correctOrder = [];
    this.moves = 0;
  }

  calculateOrders() {
    this.calculateCorrectOrder();
    this.calculateInitOrder();
    this.currentOrder = this.initOrder;
  }

  calculateCorrectOrder() {
    for (let i = 1; i < this.size; i++) {
      this.correctOrder.push(i);
    }
    this.correctOrder.push(0);
  }

  calculateInitOrder() {
    this.initOrder = _shuffle(this.correctOrder);
    this.initOrder.toString() == this.correctOrder.toString() ? this.calculateInitOrder() : false;
  }

  updateCurrentOrder(currentOrder) {
    this.currentOrder = currentOrder;
    this.checkCurrentOrder();
  }

  checkCurrentOrder() {
    this.currentOrder.toString() == this.correctOrder.toString() ? this.announceEndGame() : false;
  }

  announceEndGame() {
    document.body.style.backgroundColor = 'black';
    setTimeout(() => alert('win'), 1000);
  }
}

const _shuffle = require('lodash/shuffle');
const dayjs = require('dayjs');
export default class AppState {
  constructor() {
    this.size = 0;
    this.initOrder = [];
    this.currentOrder = [];
    this.correctOrder = [];
    this.moves = 0;
    this.time = new Date(2021, 0, 0, 0, 0, 0, 0);
    this.timerString = '00:00:00';
  }

  setAppState(size) {
    this.size = size;
    this.rowLength = Math.sqrt(this.size);
    this.time = new Date(2021, 0, 0, 0, 0, 0, 0);
    this.moves = 0;
    this.timerString = '00:00:00';
    this.calculateCorrectOrder();
    this.calculateInitOrder();
    this.currentOrder = this.initOrder;
  }

  calculateCorrectOrder() {
    this.correctOrder = [];
    for (let i = 1; i < this.size; i++) {
      this.correctOrder.push(i);
    }
    this.correctOrder.push(0);
  }

  calculateInitOrder() {
    this.initOrder = _shuffle(this.correctOrder);
    this.initOrder.toString() == this.correctOrder.toString() ? this.calculateInitOrder() : false;
  }

  startTimer() {
    setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
      if(this.time.getHours() > 0) {
        this.timerString = dayjs(this.time).format('hh:mm:ss');
      } else {
        this.timerString = dayjs(this.time).format('00:mm:ss');
      }
    }, 1000)
  }

  checkCurrentOrder() {
    this.currentOrder.toString() == this.correctOrder.toString() ? this.announceEndGame() : false;
  }

  updateMovesCounter() {
    this.moves++;
  }

  announceEndGame() {
    document.body.style.backgroundColor = 'black';
    setTimeout(() => alert('win'), 1000);
  }
}

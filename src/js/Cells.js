export default class Cells {
  constructor(currentOrder) {
    this.size = currentOrder.length;
    this.currentOrder = currentOrder;
    this.gameField = document.querySelector('.game-field');
  }

  render() {
    let cellsHtmlString = '';
    for (let i = 0; i < this.size; i++) {
      const cellClassList = `game-field__cell game-field__cell_number_${this.currentOrder[i]}`;
      cellsHtmlString += `<div class="${cellClassList}">${this.currentOrder[i]}</div>`;
    }

    this.gameField.innerHTML = cellsHtmlString;
  }

  addListener() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('game-field__cell_number_0')) {
        console.log('000');
      } else {
        console.log('XXX');
      }
    })
  }
}

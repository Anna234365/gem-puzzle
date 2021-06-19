export default class Cells {
  constructor(size) {
    this.size = size;
    this.gameField = document.querySelector('.game-field');
  }

  render() {
    let cellsHtmlString = '';
    for (let i = 0; i < this.size; i++) {
      const cellClassList = `game-field__cell game-field__cell_number_${i}`;
      cellsHtmlString += `<div class="${cellClassList}">${i}</div>`;
    }

    this.gameField.innerHTML = cellsHtmlString;
  }
}

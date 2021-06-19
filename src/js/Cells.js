export default class Cells {
  constructor(currentOrder) {
    this.size = currentOrder.length;
    this.rowLength = Math.sqrt(this.size);
    this.currentOrder = currentOrder;
    this.gameField = document.querySelector('.game-field');
  }

  render() {
    let htmlString = '';
    for (let i = 0; i < this.size; i++) {
      let classList = "";
      if (this.currentOrder[i] === 0) {
        classList = 'class ="game-field__cell game-field__cell_number_0';
      } else {
        classList = `class ="game-field__cell"`;
      }
      const attributeCellNumber = `cell-number="${i + 1}"`;
      htmlString += `<div ${classList} ${attributeCellNumber}>${this.currentOrder[i]}</div>`;
    }

    this.gameField.innerHTML = htmlString;
  }

  addListener() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('game-field__cell')) {
        this.shift(event.target);
      }
    })
  }

  shift(clickedCell) {
    const clickedCellNumber = parseInt(clickedCell.getAttribute('cell-number'));
    let upperCellNumber;
    let bottomCellNumber;
    let leftCellNumber;
    let rightCellNumber;

    if (clickedCellNumber % this.rowLength == 0) {
      if (clickedCellNumber == this.rowLength) {
        upperCellNumber = 'none';
        bottomCellNumber = clickedCellNumber + this.rowLength;
      } else if (clickedCellNumber == this.rowLength**2) {
        upperCellNumber = clickedCellNumber - this.rowLength;
        bottomCellNumber = 'none';
      } else {
        upperCellNumber = clickedCellNumber - this.rowLength;
        bottomCellNumber = clickedCellNumber + this.rowLength;
      }
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = 'none';
    } else if (clickedCellNumber % this.rowLength == 1) {
      if (clickedCellNumber == 1) {
        upperCellNumber = 'none';
        bottomCellNumber = clickedCellNumber + this.rowLength;
      } else if (clickedCellNumber == this.size - this.rowLength + 1) {
        upperCellNumber = clickedCellNumber - this.rowLength;
        bottomCellNumber = 'none';
      } else {
        upperCellNumber = clickedCellNumber - this.rowLength;
        bottomCellNumber = clickedCellNumber + this.rowLength;
      }
      leftCellNumber = 'none';
      rightCellNumber = clickedCellNumber + 1;
    } else {
      upperCellNumber = clickedCellNumber - this.rowLength;
      bottomCellNumber = clickedCellNumber + this.rowLength;
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = clickedCellNumber + 1;
    }
    [upperCellNumber, bottomCellNumber, leftCellNumber, rightCellNumber].forEach(elem => {

      if (this.currentOrder[elem - 1] === 0) {
        this.currentOrder[elem - 1] = this.currentOrder[clickedCellNumber - 1];
        this.currentOrder[clickedCellNumber - 1] = 0;
      }
    })
    this.render();
  }
}

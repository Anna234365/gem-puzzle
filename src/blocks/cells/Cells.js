export default class Cells {
  constructor(appState, infoPanel) {
    this.appState = appState;
    this.infoPanel = infoPanel;
    this.size = this.appState.currentOrder.length;
    this.currentOrder = this.appState.currentOrder;
    this.rowLength = Math.sqrt(this.size);
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
        const clickedCellNumber = parseInt(event.target.getAttribute('cell-number'));
        const closestCells = this.calculateClosestCells(clickedCellNumber);
        this.shift(clickedCellNumber, closestCells);
      }
    })
  }

  calculateClosestCells(clickedCellNumber) {
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

    return [upperCellNumber, bottomCellNumber, leftCellNumber, rightCellNumber];
  }

  shift(clickedCellNumber, closestCells) {
    closestCells.forEach(elem => {
      if (this.currentOrder[elem - 1] === 0) {
        const emptyCellNumber = elem;
        this.currentOrder[emptyCellNumber - 1] = this.currentOrder[clickedCellNumber - 1];
        this.currentOrder[clickedCellNumber - 1] = 0;
        this.render();
        this.appState.updateCurrentOrder(this.currentOrder);
        this.appState.updateMovesCounter();
        this.infoPanel.renderMovesCounter();
      }
    })
  }
}

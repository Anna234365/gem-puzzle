export default class Cells {
  constructor(appState, infoPanel) {
    this.appState = appState;
    this.infoPanel = infoPanel;

    this.gameField = document.querySelector('.game-field');
  }

  renderGameField() {
    const gameField = document.createElement('div');
    gameField.classList.add('game-field', `game-field_size_${this.appState.size}`);
    document.body.appendChild(gameField);
    this.gameField = document.querySelector('.game-field');
    this.renderCells();
  }

  renderCells() {
    this.gameField.innerHTML = '';
    let htmlString = '';
    for (let i = 0; i < this.appState.size; i++) {
      let classList = "";
      if (this.appState.currentOrder[i] === 0) {
        classList = 'class="game-field__cell game-field__cell_empty"';
      } else {
        classList = `class="game-field__cell"`;
      }
      const attributeCellNumber = `cell-number="${i + 1}"`;

      htmlString += `<div ${classList} ${attributeCellNumber}>${this.appState.currentOrder[i]}</div>`;
    }
    this.gameField.innerHTML = htmlString;
    this.gameField.classList = `game-field game-field_size_${this.appState.size}`;
  }

  addListener() {
    this.gameField.addEventListener('click', (event) => {
      if (event.target.classList.contains('game-field__cell')) {
        const clickedCellNumber = parseInt(event.target.getAttribute('cell-number'));
        const closestCells = this.calculateClosestCells(clickedCellNumber);
        this.shiftCell(clickedCellNumber, closestCells);
      }
    })
  }

  calculateClosestCells(clickedCellNumber) {
    let upperCellNumber;
    let bottomCellNumber;
    let leftCellNumber;
    let rightCellNumber;

    if (clickedCellNumber % this.appState.rowLength == 0) {
      if (clickedCellNumber == this.appState.rowLength) {
        upperCellNumber = 'none';
        bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      } else if (clickedCellNumber == this.appState.rowLength**2) {
        upperCellNumber = clickedCellNumber - this.appState.rowLength;
        bottomCellNumber = 'none';
      } else {
        upperCellNumber = clickedCellNumber - this.appState.rowLength;
        bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      }
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = 'none';
    } else if (clickedCellNumber % this.appState.rowLength == 1) {
      if (clickedCellNumber == 1) {
        upperCellNumber = 'none';
        bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      } else if (clickedCellNumber == this.appState.size - this.appState.rowLength + 1) {
        upperCellNumber = clickedCellNumber - this.appState.rowLength;
        bottomCellNumber = 'none';
      } else {
        upperCellNumber = clickedCellNumber - this.appState.rowLength;
        bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      }
      leftCellNumber = 'none';
      rightCellNumber = clickedCellNumber + 1;
    } else if (clickedCellNumber < this.appState.rowLength) {
      upperCellNumber = 'none';
      bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = clickedCellNumber + 1;
    } else if (clickedCellNumber > this.appState.rowLength * ( this.appState.rowLength - 1) ) {
      upperCellNumber = clickedCellNumber - this.appState.rowLength;
      bottomCellNumber = 'none';
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = clickedCellNumber + 1;
    } else {
      upperCellNumber = clickedCellNumber - this.appState.rowLength;
      bottomCellNumber = clickedCellNumber + this.appState.rowLength;
      leftCellNumber = clickedCellNumber - 1;
      rightCellNumber = clickedCellNumber + 1;
    }
    return [upperCellNumber, bottomCellNumber, leftCellNumber, rightCellNumber];
  }

  shiftCell(clickedCellNumber, closestCells) {
    closestCells.forEach(elem => {
      if (this.appState.currentOrder[elem - 1] === 0) {
        const emptyCellNumber = elem;
        this.appState.currentOrder[emptyCellNumber - 1] = this.appState.currentOrder[clickedCellNumber - 1];
        this.appState.currentOrder[clickedCellNumber - 1] = 0;
        this.renderCells();
        this.appState.updateMovesCounter();
        this.infoPanel.renderMovesCounter();
        this.appState.checkCurrentOrder();
      }
    })
  }
}

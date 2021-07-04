export default class ControlPanel {
  constructor(cells, appState) {
    this.cells = cells;
    this.appState = appState;

  }


  renderCotrolPanel() {
    document.body.insertAdjacentHTML('beforeend',
    `<div class="control-panel">
      <div class="dropdown control-panel__dropdown">
        <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          NEW
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">3x3</a></li>
          <li><a class="dropdown-item" href="#">4x4</a></li>
          <li><a class="dropdown-item" href="#">5x5</a></li>
          <li><a class="dropdown-item" href="#">6x6</a></li>
          <li><a class="dropdown-item" href="#">7x7</a></li>
          <li><a class="dropdown-item" href="#">8x8</a></li>
        </ul>
      </div>
      <button type="button" class="btn control-panel__button">Play</button>
      <button type="button" class="btn control-panel__button">Resume</button>
      <button type="button" class="btn control-panel__button">Score</button>
    </div>`);

    this.addListeners();
  }

  addListeners() {
    const dropDownFieldSize = document.querySelector('.dropdown-menu');
    dropDownFieldSize.addEventListener('click', (event) => {
      if (event.target.classList.contains('dropdown-item')) {
        const size = parseInt(event.target.innerText.slice(2))**2;
        this.appState.setAppState(size);
        this.cells.renderCells();
      }
    })
  }
}

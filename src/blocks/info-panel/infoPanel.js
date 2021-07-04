export default class InfoPanel {
  constructor(appState) {
    this.appState = appState;
    this.movesCounter;
    this.timer;
  }

  renderInfoPanel() {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div class="info-panel">
        <div class="info-panel__moves-wrapper">Moves:
          <div class="info-panel__moves">${this.appState.moves}</div>
        </div>
        <div class="info-panel__timer-wrapper">Time:
          <div class="info-panel__time">${this.appState.timerString}</div>
        </div>
      </div>`);
    this.movesCounter = document.querySelector('.info-panel__moves');
    this.timer = document.querySelector('.info-panel__time');
  }

  renderMovesCounter() {
    this.movesCounter.innerHTML = this.appState.moves;
  }

  renderTimer() {
    setInterval(() => this.timer.innerHTML = this.appState.timerString, 1000);
  }
}

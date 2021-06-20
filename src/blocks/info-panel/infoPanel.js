export default function renderInfoPanel() {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="info-panel">
      <div class="info-panel__moves-wrapper">Moves:
        <div class="info-panel__moves">0</div>
      </div>
      <div class="info-panel__timer-wrapper">Time:
      <div class="info-panel__time">00:00:00</div>
    </div>
    </div>`);
}

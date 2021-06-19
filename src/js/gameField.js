export default function renderGameField(size) {
  const gameField = document.createElement('div');
  gameField.classList.add('game-field', `game-field_size_${size}`);
  document.body.appendChild(gameField);

  let cells = '';
  for (let i = 0; i < size; i++) {
    const cellClassList = `game-field__cell game-field__cell_number_${i}`;
    cells += `<div class="${cellClassList}">${i}</div>`;
  }

  gameField.innerHTML = cells;
}

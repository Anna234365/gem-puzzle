export default function renderGameField(size) {
  const gameField = document.createElement('div');
  gameField.classList.add('game-field', `game-field_size_${size}`);
  document.body.appendChild(gameField);
}

export default function gameField(size) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('game-area', `game-area_size_${size}`);
  document.body.appendChild(wrapper);

  let cells = '';
  for (let i = 0; i < size; i++) {
    const cellClassList = `game-area__cell game-area__cell_number_${i}`;
    cells += `<div class="${cellClassList}">${i}</div>`;
  }

  wrapper.innerHTML = cells;
}

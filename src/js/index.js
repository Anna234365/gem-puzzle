import '../style/style.scss';
import renderGameField from './gameField';
import Cells from './Cells';
import renderInfoPanel from './infoPanel';
import renderControlPanel from './controlPanel';

const size = 36;

renderInfoPanel();
renderGameField(size);
let cells = new Cells(size);
cells.render();
renderControlPanel()

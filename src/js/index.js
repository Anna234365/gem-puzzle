import '../style/style.scss';
import Appstate from './appState';
import renderGameField from './gameField';
import Cells from './Cells';
import renderInfoPanel from './infoPanel';
import renderControlPanel from './controlPanel';

const size = 36;
renderInfoPanel();
renderGameField(size);

let appState = new Appstate(size);
const currentOrder = appState.calculateInitOrder();

let cells = new Cells(currentOrder);
cells.render();
cells.addListener();
renderControlPanel()

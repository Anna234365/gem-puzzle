import '../style/style.scss';
import Appstate from './appState';
import renderGameField from '../blocks/game-field/gameField';
import Cells from '../blocks/cells/Cells';
import renderInfoPanel from '../blocks/info-panel/infoPanel';
import renderControlPanel from '../blocks/control-panel/controlPanel';

const size = 9;

let appState = new Appstate(size);
appState.calculateOrders();

renderGameField(size);

let cells = new Cells(appState);
cells.render();
cells.addListener();

renderInfoPanel();
renderControlPanel();

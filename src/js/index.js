import '../style/style.scss';
import Appstate from './appState';
import renderGameField from '../blocks/game-field/gameField';
import Cells from '../blocks/cells/Cells';
import InfoPanel from '../blocks/info-panel/InfoPanel';
import renderControlPanel from '../blocks/control-panel/controlPanel';

const size = 9;

let appState = new Appstate(size);
appState.calculateOrders();

let infoPanel = new InfoPanel(appState);
infoPanel.renderInfoPanel();
infoPanel.renderMovesCounter();

renderGameField(size);

let cells = new Cells(appState, infoPanel);
cells.render();
cells.addListener();

renderControlPanel();

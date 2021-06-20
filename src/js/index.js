import '../style/style.scss';
import AppState from './appState';
import renderGameField from '../blocks/game-field/gameField';
import Cells from '../blocks/cells/Cells';
import InfoPanel from '../blocks/info-panel/InfoPanel';
import renderControlPanel from '../blocks/control-panel/controlPanel';


const size = 9;

let appState = new AppState(size);
appState.calculateOrders();
appState.startTimer();

let infoPanel = new InfoPanel(appState);
infoPanel.renderInfoPanel();
infoPanel.renderMovesCounter();
infoPanel.renderTimer();

renderGameField(size);

let cells = new Cells(appState, infoPanel);
cells.render();
cells.addListener();

renderControlPanel();

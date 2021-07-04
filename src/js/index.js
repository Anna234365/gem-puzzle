import '../style/style.scss';
import 'bootstrap/js/dist/dropdown';
import AppState from './appState';
// import renderGameField from '../blocks/game-field/gameField';
import Cells from '../blocks/cells/Cells';
import InfoPanel from '../blocks/info-panel/InfoPanel';
import ControlPanel from '../blocks/control-panel/ControlPanel';

const size = 9;

let appState = new AppState();
appState.setAppState(size);
appState.startTimer();

let infoPanel = new InfoPanel(appState);
infoPanel.renderInfoPanel();
infoPanel.renderMovesCounter();
infoPanel.renderTimer();

// renderGameField(size);

let cells = new Cells(appState, infoPanel);
cells.renderGameField();
cells.addListener();

let controlPanel = new ControlPanel(cells, appState);
controlPanel.renderCotrolPanel();

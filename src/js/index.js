import '../style/style.scss';
import 'bootstrap/js/dist/dropdown';
import AppState from './appState';
import GameField from '../blocks/gameField/GameField';
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

let gameField = new GameField(appState, infoPanel);
gameField.renderGameField();
gameField.addListener();

let controlPanel = new ControlPanel(gameField, appState, infoPanel);
controlPanel.renderCotrolPanel();

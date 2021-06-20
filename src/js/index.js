import '../style/style.scss';
import Appstate from './appState';
import renderGameField from './gameField';
import Cells from './Cells';
import renderInfoPanel from './infoPanel';
import renderControlPanel from './controlPanel';

const size = 9;
renderInfoPanel();
renderGameField(size);

let appState = new Appstate(size);
appState.calculateOrders();

let cells = new Cells(appState);
cells.render();
cells.addListener();
renderControlPanel();

function myFunc() {
  alert('done')
}

import '../style/style.scss';
import renderGameField from './gameField';
import renderInfoPanel from './infoPanel';
import renderControlPanel from './controlPanel';

const size = 36;

renderInfoPanel();
renderGameField(size);
renderControlPanel()

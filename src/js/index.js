import '../style/style.scss';
import gameField from './gameField';
import infoPanel from './infoPanel';
import controlPanel from './controlPanel';

const size = 36;

infoPanel();
gameField(size);
controlPanel()

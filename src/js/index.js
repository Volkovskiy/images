import { imagesConfig } from '../config';
import ImagesList from './ImagesList';

require('../styles/styles.scss');

const imagesList = new ImagesList(imagesConfig);

imagesList.render();

document.body.innerHTML = imagesList.render();

import ImagesList from './Components/ImagesList';
import { imagesConfig } from '../config';

require('$styles/styles');

const imagesList = new ImagesList(imagesConfig);

const root = document.getElementById('app');

root.appendChild(imagesList.html);

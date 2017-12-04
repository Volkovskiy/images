import App from './Components/App';
import ImagesList from './Components/ImagesList';
import ImagesCounter from './Components/ImagesCounter';
import Clock from './Components/Clock';

import { imagesConfig } from '../config';


const app = new App({
	imagesList: new ImagesList({
		images: imagesConfig,
	}),
	clock: new Clock(),
	imagesCounter: new ImagesCounter(App.counter),
});

app.render();


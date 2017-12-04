import App from './Components/App';
import ImagesList from './Components/ImagesList';
import ImagesCounter from './Components/ImagesCounter';
import { imagesConfig } from '../config';

require('$styles/styles');


const app = new App({
	imagesList: new ImagesList({
		images: imagesConfig,
	}),
	imagesCounter: new ImagesCounter(App.counter),
});

app.render();


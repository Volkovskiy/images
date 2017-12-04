import App from './App';
import Image from './Image';
import Button from './Button';

class ImagesList {
	constructor(props) {
		this.hiddenImages = JSON.parse(localStorage.getItem('hiddenImages')) || {};
		this.config = props.images;
		this.images = this.serializeImages();
		App.counter = this.countVisible();
		this.restoreButton = new Button({
			action: this.restoreImages.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Restore images',
		});
		this.html = this.render();
	}

	hideImage(id) {
		this.hiddenImages[id] = true;
		localStorage.setItem('hiddenImages', JSON.stringify(this.hiddenImages));
		App.counter = this.countVisible();
	}

	countVisible() {
		return this.images.length - Object.keys(this.hiddenImages).length;
	}

	serializeImages() {
		return this.config.map(({ id, src }) => new Image({
			id,
			src,
			classList: ['images__wrapper', this.hiddenImages[id] ? 'hidden' : 'visible'],
			hideCallback: this.hideImage.bind(this),
		}));
	}

	render() {
		const div = document.createElement('div');
		div.classList.add('images');

		this.images.forEach(({ html }) => div.appendChild(html));
		div.appendChild(this.restoreButton.html);

		return div;
	}

	restoreImages() {
		this.images.forEach((image) => {
			if (this.hiddenImages[image.id]) {
				image.show();
			}
		});

		localStorage.removeItem('hiddenImages');
		this.hiddenImages = {};
		App.counter = this.countVisible();
	}
}

module.exports = ImagesList;

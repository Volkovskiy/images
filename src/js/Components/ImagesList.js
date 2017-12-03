import Image from './Image';
import Button from './Button';

class ImagesList {
	constructor(images) {
		ImagesList.initialize();
		this.config = images;
		this.images = this.serializeImages();
		this.restoreButton = new Button({
			callBack: this.restoreImages.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Restore images',
		});
		this.html = this.render();
	}

	static initialize() {
		ImagesList._hiddenImages = JSON.parse(localStorage.getItem('hiddenImages')) || {};
	}

	static hideImage(id) {
		ImagesList.hiddenImages = id;
		localStorage.setItem('hiddenImages', JSON.stringify(ImagesList.hiddenImages));
	}

	static get hiddenImages() {
		return this._hiddenImages;
	}

	static set hiddenImages(id) {
		this._hiddenImages[id] = true;
	}

	serializeImages() {
		const hiddenItems = ImagesList.hiddenImages;

		return this.config.map(({ id, src }) => new Image({
			id,
			src,
			classList: ['images__wrapper', hiddenItems[id] ? 'hidden' : 'visible'],
			hideCallback: ImagesList.hideImage,
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
		localStorage.removeItem('hiddenImages');
		const removedItems = ImagesList.hiddenImages;

		this.images.forEach((image) => {
			if (removedItems[image.id]) {
				image.show();
			}
		});
	}
}

module.exports = ImagesList;

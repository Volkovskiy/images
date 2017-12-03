import Image from './Image';
import Button from './Button';

class ImagesList {
	constructor(images) {
		ImagesList.hiddenImages = JSON.parse(localStorage.getItem('hiddenImages')) || {};
		this.config = images;
		this.images = this.serializeImages();
		this.restoreButton = new Button({
			callBack: this.restoreImages.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Restore images',
		});
		this.html = this.render();
	}

	static hideImage(id) {
		ImagesList.hiddenImages[id] = true;
		localStorage.setItem('hiddenImages', JSON.stringify(ImagesList.hiddenImages));
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
		const removedItems = ImagesList.hiddenImages;

		localStorage.removeItem('hiddenImages');

		this.images.forEach((image) => {
			if (removedItems[image.id]) {
				image.show();
			}
		});
		ImagesList.hiddenImages = {};
	}
}

module.exports = ImagesList;

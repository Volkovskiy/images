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
		return this.config.map(({ id, src }) => new Image({
			id,
			src,
			classList: ['images__wrapper', ImagesList.hiddenImages[id] ? 'hidden' : 'visible'],
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
		this.images.forEach((image) => {
			if (ImagesList.hiddenImages[image.id]) {
				image.show();
			}
		});

		localStorage.removeItem('hiddenImages');
		ImagesList.hiddenImages = {};
	}
}

module.exports = ImagesList;

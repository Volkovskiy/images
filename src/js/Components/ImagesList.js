import Image from './Image';
import Button from './Button';

class ImagesList {
	constructor(images) {
		this.images = images;
		this.html = this.prepareRender();
		ImagesList.removedImages = JSON.parse(localStorage.getItem('removedImages')) || {};
	}

	static get removedItems() {
		return JSON.parse(localStorage.getItem('removedImages')) || {};
	}

	prepareRender() {
		const div = document.createElement('div');
		div.classList.add('images');

		this.images.forEach(({ id, src }) => {
			const image = new Image({
				id,
				src,
				classList: ['images__image', ImagesList.removedItems[id] ? 'hidden' : 'visible'],
				hideCallback: this.removeImage,
			}).html;
			div.appendChild(image);
		});

		div.appendChild(this.addRestoreButton());

		return div;
	}

	addRestoreButton() {
		return new Button({
			callBack: this.restoreImages.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Restore images',
		}).html;
	}

	removeImage({ id }) {
		ImagesList.removedImages[id] = true;
		localStorage.setItem('removedImages', JSON.stringify(ImagesList.removedImages));
	}

	restoreImages() {
		localStorage.setItem('removedImages', '');
		// this.images.forEach(image => image.show());
	}
}

module.exports = ImagesList;

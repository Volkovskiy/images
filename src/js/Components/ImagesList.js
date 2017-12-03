import Image from './Image';
import Button from './Button';

class ImagesList {
	constructor(images) {
		ImagesList.initialize();
		this.images = images;
		this.html = this.prepareRender();
	}

	static initialize() {
		ImagesList._removedImages = JSON.parse(localStorage.getItem('removedImages')) || {};
	}

	static get removedImages() {
		return this._removedImages;
	}

	static set removedImages(id) {
		this._removedImages[id] = true;
	}

	prepareRender() {
		const div = document.createElement('div');
		div.classList.add('images');

		this.images.forEach(({ id, src }) => {
			const image = new Image({
				id,
				src,
				classList: ['images__image', ImagesList.removedImages[id] ? 'hidden' : 'visible'],
				hideCallback: ImagesList.removeImage,
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

	static removeImage({ id }) {
		ImagesList.removedImages = id;
		localStorage.setItem('removedImages', JSON.stringify(ImagesList.removedImages));
	}

	restoreImages() {
		debugger;
		localStorage.removeItem('removedImages');
		// this.images.forEach(image => image.show());
	}
}

module.exports = ImagesList;

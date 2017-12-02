import Image from './Image';

class ImagesList {
	constructor(images) {
		this.images = images;
		this.html = this.prepareRender();
	}

	prepareRender() {
		const div = document.createElement('div');
		div.classList.add('images');

		this.images.forEach(({ src }) => {
			const image = new Image(src).html;
			div.appendChild(image);
		});

		return div;
	}
}

module.exports = ImagesList;

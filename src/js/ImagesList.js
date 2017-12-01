import Image from './Image';

class ImagesList {
	constructor(images) {
		this.images = images;
	}

	renderImages() {
		return this.images.map((item) => {
			const image = new Image(item);
			return image.render();
		});
	}

	render() {
		return `
			<div class="List">
				${this.renderImages()}
			</div>
		`;
	}
}
module.exports = ImagesList;

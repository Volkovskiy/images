class Image {
	constructor(src) {
		this.src = src;
	}

	render() {
		return `<div class="image">
			${this.src}
		</div>`;
	}
}

module.exports = Image;

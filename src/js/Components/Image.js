import { setListener } from '../tools';
import Button from './Button';

require('$styles/image');

class Image {
	constructor(src) {
		this.src = src;
		this.show = false;
		this.html = this.prepareRender();
	}

	hide() {
		console.log('remove', this);
	}

	createButton() {
		return new Button({
			callBack: this.hide.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Remove',
		}).html;
	}

	prepareRender() {
		const div = document.createElement('div');
		const img = document.createElement('img');

		div.classList.add('image');
		img.setAttribute('src', this.src);
		setListener(img, 'click', this.openModal.bind(this));
		div.appendChild(img);
		div.appendChild(this.createButton());

		return div;
	}

	openModal() {
		console.log('open modal', this);
	}
	// todo: add setter 'show/hide'
}

module.exports = Image;

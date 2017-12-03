import Button from './Button';

import { setListener } from '../tools';

require('$styles/modal');

class Modal {
	constructor(options) {
		this.imageSrc = options.imageSrc || '';
		this.html = this.render();
	}

	openModal() {
		document.getElementById('app').appendChild(this.html);
	}

	hideModal() {
		document.getElementById('app').removeChild(this.html);
	}

	render() {
		const background = document.createElement('div');
		background.classList.add('modal');

		const wrapper = document.createElement('div');
		wrapper.classList.add('modal__wrapper');

		const image = document.createElement('img');
		image.classList.add('modal__image');
		image.setAttribute('src', this.imageSrc);

		wrapper.appendChild(image);
		wrapper.appendChild(this.renderCloseButton());

		background.appendChild(wrapper);

		return background;
	}

	renderCloseButton() {
		return new Button({
			callBack: this.hideModal.bind(this),
			classList: ['modal__close'],
			text: 'Close',
		}).html;
	}
}

module.exports = Modal;
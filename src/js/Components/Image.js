import Button from './Button';
import Modal from './Modal';

import { setListener } from '../tools';

require('$styles/image');

class Image {
	constructor(options) {
		this.id = options.id;
		this.src = options.src;
		this.hideCallback = options.hideCallback || Image.defaultHideCallback;
		this.classList = options.classList || [];
		this.hideButton = new Button({
			action: this.hide.bind(this),
			classList: ['button', 'button__hide'],
			text: 'X',
		});
		this.html = this.render();
	}

	hide() {
		this.hideCallback(this.id);
		this.html.classList.remove('visible');
		this.html.classList.add('hidden');
	}

	show() {
		this.html.classList.remove('hidden');
		this.html.classList.add('visible');
	}

	render() {
		const div = document.createElement('div');
		div.classList.add(...this.classList, 'image');

		const img = document.createElement('div');
		img.classList.add('image_rounded');
		img.setAttribute('style', `background-image: url(${this.src});`);
		setListener(img, 'click', this.openModal.bind(this));

		const buttonWrapper = document.createElement('div');
		buttonWrapper.classList.add('button-wraper');
		buttonWrapper.appendChild(this.hideButton.html);

		div.appendChild(img);
		div.appendChild(buttonWrapper);

		return div;
	}

	openModal() {
		new Modal({	imageSrc: this.src }).openModal();
	}

	static defaultHideCallback() {}
}

module.exports = Image;

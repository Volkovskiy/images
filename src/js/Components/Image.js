import Button from './Button';
import Modal from './Modal';

import { setListener } from '../tools';

require('$styles/image');

class Image {
	constructor(options) {
		this.id = options.id;
		this.src = options.src;
		this.hideCallback = options.hideCallback || Image.defaultHideCallback;
		this.classList = options.classList;
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

	renderHideButton() {
		return new Button({
			callBack: this.hide.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Remove',
		}).html;
	}

	render() {
		const div = document.createElement('div');
		div.classList.add(...this.classList, 'image');

		const img = document.createElement('img');
		img.setAttribute('src', this.src);
		setListener(img, 'click', this.openModal.bind(this));

		div.appendChild(img);
		div.appendChild(this.renderHideButton());

		return div;
	}

	openModal() {
		new Modal({	imageSrc: this.src }).openModal();
	}

	static defaultHideCallback() {}
}

module.exports = Image;

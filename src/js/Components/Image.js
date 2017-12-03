import { setListener } from '../tools';
import Button from './Button';

require('$styles/image');

class Image {
	constructor(options) {
		this.id = options.id;
		this.src = options.src;
		this.hideCallback = options.hideCallback;
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

	addHideButton() {
		return new Button({
			callBack: this.hide.bind(this),
			classList: ['test', 'secondClass'],
			text: 'Remove',
		}).html;
	}

	render() {
		const div = document.createElement('div');
		const img = document.createElement('img');

		div.classList.add(...this.classList, 'image');
		img.setAttribute('src', this.src);
		setListener(img, 'click', this.openModal.bind(this));
		div.appendChild(img);
		div.appendChild(this.addHideButton());

		return div;
	}

	openModal() {
		console.log('open modal', this);
	}
}

module.exports = Image;

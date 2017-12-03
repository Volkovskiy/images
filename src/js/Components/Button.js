import { setListener } from '../tools';

class Button {
	constructor(params) {
		this.text = params.text || '';
		this.classList = params.classList || [];
		this.action = params.action || Button.defaultCallback;
		this.html = this.prepareRender();
	}

	prepareRender() {
		const button = document.createElement('button');
		button.classList.add(...this.classList);
		button.textContent = this.text;
		setListener(button, 'click', this.action);

		return button;
	}

	static defaultCallback() {}
}

module.exports = Button;

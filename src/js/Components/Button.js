import { setListener } from '../tools';

class Button {
	constructor(params) {
		this.text = params.text || '';
		this.classList = params.classList || [];
		this.callBack = params.callBack || Button.defaultCallback;
		this.html = this.prepareRender();
	}

	prepareRender() {
		const button = document.createElement('button');
		button.classList.add(...this.classList);
		button.textContent = this.text;
		setListener(button, 'click', this.callBack);

		return button;
	}

	static defaultCallback() {}
}

module.exports = Button;

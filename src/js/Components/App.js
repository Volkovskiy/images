
class App {
	constructor(components) {
		this.imagesCounter = components.imagesCounter;
		this.imagesList = components.imagesList;
		App._counter = 0;
		App.renderCounter = this.imagesCounter;
	}

	render() {
		const root = document.getElementById('app');

		const span = document.createElement('span');
		span.textContent = App.counter;

		root.appendChild(this.imagesCounter.render());
		root.appendChild(this.imagesList.html);
	}

	static get counter() {
		return App._counter;
	}

	static set counter(value) {
		App._counter = value;

		if (App.renderCounter) {
			App.renderCounter.render();
		}
	}
}

module.exports = App;


class App {
	constructor(components) {
		this.imagesCounter = components.imagesCounter;
		this.imagesList = components.imagesList;
		this.clock = components.clock;
		App._counter = 0;
	}

	render() {
		const root = document.getElementById('app');

		root.appendChild(this.imagesCounter.html);
		root.appendChild(this.clock.render());
		root.appendChild(this.imagesList.render());
	}

	static get counter() {
		return App._counter;
	}

	static set counter(value) {
		App._counter = value;
		const counter = document.querySelector('.counter');
		if (counter) {
			counter.textContent = App._counter;
		}
	}
}

module.exports = App;

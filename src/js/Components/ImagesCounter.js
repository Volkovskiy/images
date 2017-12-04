class Counter {
	constructor(value) {
		this.value = value;
		this.html = this.render();
	}

	render() {
		const span = document.createElement('span');
		span.classList.add('counter');
		span.textContent = this.value;

		return span;
	}
}

module.exports = Counter;

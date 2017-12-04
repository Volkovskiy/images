class Counter {
	constructor(value) {
		this.value = value;
	}

	render() {
		console.log('render');
		const span = document.createElement('span');
		span.textContent = this.value;
		return span;
	}
}

module.exports = Counter;

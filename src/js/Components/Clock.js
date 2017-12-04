require('$styles/counter');

class Clock {
	constructor(locale = 'ru') {
		this.locale = locale;
		this.date = new Date();
	}
	render() {
		const span = document.createElement('span');
		span.classList.add('date');

		span.textContent = this.getDate();

		setInterval(() => {
			span.textContent = `Date: ${this.getDate()}`;
		}, 1000);

		return span;
	}

	getDate() {
		const formatter = new Intl.DateTimeFormat(this.locale, {
			month: 'numeric',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});

		return formatter.format(new Date());
	}
}

module.exports = Clock;

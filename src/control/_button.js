
class Button extends Control {

	#text;

	constructor(owner, deg, text) {
		super(owner, deg);
		this.#text = text;

		const s = { width: this.#text.length + 2, height: 2 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name() {
		return 'button';
	}

}

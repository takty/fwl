import { Control } from './control.js';

export class Checkbox extends Control {

	#text;

	constructor(owner, deg, text) {
		super(owner, deg);
		this.#text = text;

		const s = { width: this.#text.length + 2, height: 1 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name() {
		return 'checkbox';
	}

}

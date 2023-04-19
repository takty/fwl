import { Control } from './control.js';

export class Label extends Control {

	#text;

	constructor(owner, deg, text) {
		super(owner, deg);
		this.#text = text;

		const s = { width: this.#text.length, height: 1 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name() {
		return 'label';
	}

}

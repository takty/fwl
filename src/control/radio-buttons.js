import { Control } from './control.js';

export class RadioButtons extends Control {

	#items;

	constructor(owner, deg, items) {
		super(owner, deg);
		this.#items = [...items];

		let maxLen = 0;
		for (const it of items) {
			maxLen = Math.max(maxLen, it.length);
		}

		const s = { width: maxLen + 1, height: items.length * 1 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name() {
		return 'radio buttons';
	}

}

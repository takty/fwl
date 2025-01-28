import { Control } from './control';

export class RadioButtons extends Control {

	#items: string[];

	constructor(owner: any, deg: number, items: string[]) {
		super(owner, deg);
		this.#items = [...items];

		let maxLen: number = 0;
		for (const it of items) {
			maxLen = Math.max(maxLen, it.length);
		}

		const s = { width: maxLen + 1, height: items.length * 1 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name(): string {
		return 'radio buttons';
	}

}

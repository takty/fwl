import { Control } from './control';

export class Label extends Control {

	#text: string;

	constructor(owner: any, deg: number, text: string) {
		super(owner, deg);
		this.#text = text;

		const s = { width: this.#text.length, height: 1 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name(): string {
		return 'label';
	}

}

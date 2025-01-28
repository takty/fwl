import { Control } from './control';

export class Button extends Control {

	#text: string;

	constructor(owner: any, deg: number, text: string) {
		super(owner, deg);
		this.#text = text;

		const s = { width: this.#text.length + 2, height: 2 };
		this.setMinimumSize(s);
		this.setMaximumSize(s);
	}

	name(): string {
		return 'button';
	}

}

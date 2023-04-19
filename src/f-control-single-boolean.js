import { FControl } from './f-control.js';
import { Checkbox } from './control/checkbox.js';
import { RadioButtons } from './control/radio-buttons.js';

export class SingleBoolean extends FControl {

	#itemTrue;
	#itemFalse;

	constructor(itemTrue, itemFalse) {
		super();
		this.#itemTrue  = itemTrue;
		this.#itemFalse = itemFalse;
	}

	name() {
		return 'single boolean (' + super.name() + ')';
	}

	_getCandidateEntries() {
		return [
			[0.9, owner => new Checkbox(owner, 0.9, this.#itemTrue)],
			[1.0, owner => new RadioButtons(owner, 1.0, [this.#itemTrue, this.#itemFalse])],
		];
	}

}

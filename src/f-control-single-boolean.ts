import { FControl } from './f-control';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { Checkbox } from './control/checkbox';
import { RadioButtons } from './control/radio-buttons';

export class SingleBoolean extends FControl {

	#itemTrue: string;
	#itemFalse: string;

	constructor(itemTrue: string, itemFalse: string) {
		super();
		this.#itemTrue  = itemTrue;
		this.#itemFalse = itemFalse;
	}

	override name(): string {
		return 'single boolean (' + super.name() + ')';
	}

	override _getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		return [
			[0.9, owner => new Checkbox(owner, 0.9, this.#itemTrue)],
			[1.0, owner => new RadioButtons(owner, 1.0, [this.#itemTrue, this.#itemFalse])],
		];
	}

}

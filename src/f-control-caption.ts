import { FControl } from './f-control';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { Label } from './control/label';

export class Caption extends FControl {

	#longText: string;
	#shortText: string;

	constructor(longText: string, shortText: string) {
		super();
		this.#longText  = longText;
		this.#shortText = shortText;
	}

	name(): string {
		return 'caption (' + super.name() + ')';
	}

	_getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		return [
			[1.0, owner => new Label(owner, 1.0, this.#longText)],
			[0.8, owner => new Label(owner, 0.8, this.#shortText)],
		];
	}

}

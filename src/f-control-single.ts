import { FControl } from './f-control';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { ListBox } from './control/list-box';
import { RadioButtons } from './control/radio-buttons';

export class Single extends FControl {

	#items: string[];

	constructor(...items: string[]) {
		super();
		this.#items = items;
	}

	override name(): string {
		return 'single (' + super.name() + ')';
	}

	override _getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		const r: [number, (owner: any) => Layout | Control][] = ListBox.createVariableInstances(0.75, 0.9, this.#items);
		r.push([1.0, owner => new RadioButtons(owner, 1.0, this.#items)]);
		return r;
	}

}

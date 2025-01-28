import { FControl } from './f-control';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { Checkboxes } from './control/checkboxes';
import { ListBox } from './control/list-box';

export class Multiple extends FControl {

	#items: string[];

	constructor(...items: string[]) {
		super();
		this.#items = items;
	}

	name(): string {
		return 'multiple (' + super.name() + ')';
	}

	_getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		const r: [number, (owner: any) => Layout | Control][] = ListBox.createVariableInstances(0.75, 0.9, this.#items);
		r.push([1.0, owner => new Checkboxes(owner, 1.0, this.#items)]);
		return r;
	}

}

import { FElement } from './f-element';
import { FLayout } from './f-layout';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { HorizontalArray } from './layout/array-horizontal';
import { VerticalArray } from './layout/array-vertical';

export class Group extends FLayout {

	constructor(args: { children: FElement[] }) {
		super();
		if (args.children) {
			for (const c of args.children) {
				this.add(c);
			}
		}
	}

	override _getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		return [
			[0.98, owner => new HorizontalArray(owner, 0.98)],
			[1.0,  owner => new VerticalArray(owner, 1.0)],
		];
	}

}

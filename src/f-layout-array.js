import { FLayout } from './f-layout.js';
import { HorizontalArray } from './layout/array-horizontal.js';
import { VerticalArray } from './layout/array-vertical.js';

export class Group extends FLayout {

	constructor(args) {
		super();
		if (args.children) {
			for (const c of args.children) {
				this.add(c);
			}
		}
	}

	_getCandidateEntries() {
		return [
			[0.98, owner => new HorizontalArray(owner, 0.98)],
			[1.0,  owner => new VerticalArray(owner, 1.0)],
		];
	}

}

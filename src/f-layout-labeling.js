import { FLayout } from './f-layout.js';
import { LeftLabeling } from './layout/labeling-left.js';
import { TopLabeling } from './layout/labeling-top.js';

export class Labeling extends FLayout {

	constructor(e_label, e_content) {
		super();
		this.add(e_label);
		this.add(e_content);
	}

	_getCandidateEntries() {
		return [
			[1.0, owner => new LeftLabeling(owner, 1)],
			[0.9, owner => new TopLabeling(owner, 0.9)],
		];
	}

}

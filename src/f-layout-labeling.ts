import { FLayout } from './f-layout';
import { Control } from './control/control';
import { Layout } from './layout/layout';
import { LeftLabeling } from './layout/labeling-left';
import { TopLabeling } from './layout/labeling-top';

export class Labeling extends FLayout {

	constructor(e_label, e_content) {
		super();
		this.add(e_label);
		this.add(e_content);
	}

	_getCandidateEntries(): [number, (owner: any) => Layout | Control][] {
		return [
			[1.0, owner => new LeftLabeling(owner, 1)],
			[0.9, owner => new TopLabeling(owner, 0.9)],
		];
	}

}

import { FElement } from '../f-element';
import { FLayout } from '../f-layout';
import { Layout } from './layout';

type Size = { width: number, height: number };

export class LeftLabeling extends Layout {

	constructor(owner: any, deg: number) {
		super(owner, deg, Layout.HORIZONTAL);
	}

	override name(): string {
		return 'left labeling';
	}

	_calcSize(ss: Size[]): Size {
		const width: number  = ss[0].width + 1 + ss[1].width + 2;
		const height: number = Math.max(ss[0].height, ss[1].height) + 2;
		return { width, height };
	}

	doLayout(children: FElement[], size: Size): void {
		const le: FElement = children[0];
		const ce: FElement = children[1];
		const ld: Size = le.getMinimumSize();
		const cd: Size = ce.getMaximumSize();

		le.setSize(ld.width, ld.height);
		le.setLocation(1, 1);

		ce.setSize(Math.min(size.width - 2 - (ld.width + 1), cd.width), Math.min(size.height - 2, cd.height));
		ce.setLocation(1 + le.getSize().width + 1, 1);

		if (ce instanceof FLayout) {
			ce.doLayout();
		}
	}

}

import { FLayout } from '../f-layout.js';
import { Layout } from './layout.js';

export class LeftLabeling extends Layout {

	constructor(owner, deg) {
		super(owner, deg, Layout.HORIZONTAL);
	}

	name() {
		return 'left labeling';
	}

	_calcSize(ss) {
		const width  = ss[0].width + 1 + ss[1].width + 2;
		const height = Math.max(ss[0].height, ss[1].height) + 2;
		return { width, height };
	}

	doLayout(children, size) {
		const le = children[0];
		const ce = children[1];
		const ld = le.getMinimumSize();
		const cd = ce.getMaximumSize();

		le.setSize(ld.width, ld.height);
		le.setLocation(1, 1);

		ce.setSize(Math.min(size.width - 2 - (ld.width + 1), cd.width), Math.min(size.height - 2, cd.height));
		ce.setLocation(1 + le.getSize().width + 1, 1);

		if (ce instanceof FLayout) {
			ce.doLayout();
		}
	}

}

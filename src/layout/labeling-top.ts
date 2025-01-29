import { FElement } from '../f-element';
import { FLayout } from '../f-layout';
import { Layout } from './layout';

type Size = { width: number, height: number };

export class TopLabeling extends Layout {

	#indent: number = 1;

	constructor(owner: any, deg: number) {
		super(owner, deg, Layout.VERTICAL);
	}

	override name(): string {
		return 'top labeling';
	}

	_calcSize(ss: Size[]): Size {
		const width: number  = Math.max(ss[0].width, ss[1].width + this.#indent) + 2;
		const height: number = ss[0].height + 1 + ss[1].height + 2;
		return { width, height };
	}

	doLayout(children: FElement[], size: Size): void {
		const le: FElement = children[0];
		const ce: FElement = children[1];
		const ld: Size = le.getMinimumSize();
		const cd: Size = ce.getMaximumSize();

		le.setSize(ld.width, ld.height);
		le.setLocation(1, 1);

		ce.setSize(Math.min(size.width - 2 - this.#indent, cd.width), Math.min(size.height - 2 - (ld.height + 1), cd.height));
		ce.setLocation(1 + this.#indent, 1 + le.getSize().height + 1);

		if (ce instanceof FLayout) {
			ce.doLayout();
		}
	}

}

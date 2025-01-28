import { FElement } from '../f-element';
import { FLayout } from '../f-layout';
import { Layout } from './layout';

type Size = { width: number, height: number };

export class VerticalArray extends Layout {

	constructor(owner: any, deg: number) {
		super(owner, deg, Layout.VERTICAL);
	}

	name(): string {
		return 'vertical array';
	}

	_calcSize(ss: Size[]): Size {
		let width: number  = 0;
		let height: number = 0;

		for (const s of ss) {
			if (width < s.width) {
				width = s.width;
			}
			height += s.height;
		}
		width  += 2;
		height += (ss.length - 1) * 1 + 2;
		return { width, height };
	}

	doLayout(children: FElement[], size: Size): void {
		let y: number = 1;

		for (const fe of children) {
			const min: Size = fe.getMinimumSize();
			const max: Size = fe.getMaximumSize();
			fe.setSize(Math.min(size.width - 2, max.width), min.height);
			fe.setLocation(1, y);

			if (fe instanceof FLayout) {
				fe.doLayout();
			}
			y += fe.getSize().height + 1;
		}
	}

}

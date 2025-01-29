import { FElement } from '../f-element';
import { FLayout } from '../f-layout';
import { Layout } from './layout';

type Size = { width: number, height: number };

export class HorizontalArray extends Layout {

	constructor(owner: any, deg: number) {
		super(owner, deg, Layout.HORIZONTAL);
	}

	override name(): string {
		return 'horizontal array';
	}

	_calcSize(ss: Size[]): Size {
		let width: number  = 0;
		let height: number = 0;

		for (const s of ss) {
			width += s.width;
			if (height < s.height) {
				height = s.height;
			}
		}
		width  += (ss.length - 1) * 1 + 2;
		height += 2;
		return { width, height };
	}

	doLayout(children: FElement[], size: Size): void {
		let x: number = 1;

		for (const fe of children) {
			const min: Size = fe.getMinimumSize();
			const max: Size = fe.getMaximumSize();
			fe.setSize(min.width, Math.min(size.height - 2, max.height));
			fe.setLocation(x, 1);

			if (fe instanceof FLayout) {
				fe.doLayout();
			}
			x += fe.getSize().width + 1;
		}
	}

}

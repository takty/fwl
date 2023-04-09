
class HorizontalArray extends Layout {

	constructor(owner, deg) {
		super(owner, deg, Layout.HORIZONTAL);
	}

	name() {
		return 'horizontal array';
	}

	_calcSize(ss) {
		let width  = 0;
		let height = 0;

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

	doLayout(children, size) {
		let x = 1;

		for (const fe of children) {
			const min = fe.getMinimumSize();
			const max = fe.getMaximumSize();
			fe.setSize(min.width, Math.min(size.height - 2, max.height));
			fe.setLocation(x, 1);

			if (fe instanceof FLayout) {
				fe.doLayout();
			}
			x += fe.getSize().width + 1;
		}
	}

}

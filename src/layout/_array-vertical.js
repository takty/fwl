
class VerticalArray extends Layout {

	constructor(owner, deg) {
		super(owner, deg, Layout.VERTICAL);
	}

	name() {
		return 'vertical array';
	}

	_calcSize(ss) {
		let width  = 0;
		let height = 0;

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

	doLayout(children, size) {
		let y = 1;

		for (const fe of children) {
			const min = fe.getMinimumSize();
			const max = fe.getMaximumSize();
			fe.setSize(Math.min(size.width - 2, max.width), min.height);
			fe.setLocation(1, y);

			if (fe instanceof FLayout) {
				fe.doLayout();
			}
			y += fe.getSize().height + 1;
		}
	}

}

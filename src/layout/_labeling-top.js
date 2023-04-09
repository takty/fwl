
class TopLabeling extends Layout {

	#indent = 1;

	constructor(owner, deg) {
		super(owner, deg, Layout.VERTICAL);
	}

	name() {
		return 'top labeling';
	}

	_calcSize(ss) {
		const width  = Math.max(ss[0].width, ss[1].width + this.#indent) + 2;
		const height = ss[0].height + 1 + ss[1].height + 2;
		return { width, height };
	}

	doLayout(children, size) {
		const le = children[0];
		const ce = children[1];
		const ld = le.getMinimumSize();
		const cd = ce.getMaximumSize();

		le.setSize(ld.width, ld.height);
		le.setLocation(1, 1);

		ce.setSize(Math.min(size.width - 2 - this.#indent, cd.width), Math.min(size.height - 2 - (ld.height + 1), cd.height));
		ce.setLocation(1 + this.#indent, 1 + le.getSize().height + 1);

		if (ce instanceof FLayout) {
			ce.doLayout();
		}
	}

}

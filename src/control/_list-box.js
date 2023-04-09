
class ListBox extends Control {

	static MIN_ITEM_SIZE = 4;

	#items;

	static createVariableInstances(minDeg, maxDeg, items) {
		if (items.length <= ListBox.MIN_ITEM_SIZE) {
			return [[maxDeg, owner => new ListBox(owner, maxDeg, items, ListBox.MIN_ITEM_SIZE)]];
		}
		const ret = [];
		const rDeg = maxDeg - minDeg;
		for (let i = ListBox.MIN_ITEM_SIZE + 1; i < items.length; ++i) {
			const r = maxDeg + rDeg * (i / items.length - 1);
			const count = i;
			ret.push([r, owner => new ListBox(owner, r, items, count)]);
		}
		return ret;
	}

	constructor(owner, deg, items, count = items.length) {
		super(owner, deg);
		this.#items = [...items];

		const minH = Math.min(count, ListBox.MIN_ITEM_SIZE) * 1;

		let maxLen = 0;
		for (const it of items) {
			maxLen = Math.max(maxLen, it.length);
		}

		this.setMinimumSize({ width: maxLen + 1, height: minH });
		this.setMaximumSize({ width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER });
	}

	name() {
		return 'list box';
	}

}

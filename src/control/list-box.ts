import { Layout } from './../layout/layout';
import { Control } from './control';

export class ListBox extends Control {

	static MIN_ITEM_SIZE: number = 4;

	#items: string[];

	static createVariableInstances(minDeg: number, maxDeg: number, items: string[]): [number, (owner: any) => Layout | Control][] {
		if (items.length <= ListBox.MIN_ITEM_SIZE) {
			return [[maxDeg, (owner: any): any => new ListBox(owner, maxDeg, items, ListBox.MIN_ITEM_SIZE)]];
		}
		const ret: [number, (owner: any) => any][] = [];
		const rDeg: number = maxDeg - minDeg;
		for (let i: number = ListBox.MIN_ITEM_SIZE + 1; i < items.length; ++i) {
			const r: number = maxDeg + rDeg * (i / items.length - 1);
			const count: number = i;
			ret.push([r, (owner: any): any => new ListBox(owner, r, items, count)]);
		}
		return ret;
	}

	constructor(owner: any, deg: number, items: string[], count: number = items.length) {
		super(owner, deg);
		this.#items = [...items];

		const minH: number = Math.min(count, ListBox.MIN_ITEM_SIZE) * 1;

		let maxLen: number = 0;
		for (const it of items) {
			maxLen = Math.max(maxLen, it.length);
		}

		this.setMinimumSize({ width: maxLen + 1, height: minH });
		this.setMaximumSize({ width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER });
	}

	name(): string {
		return 'list box';
	}

}

import { FElement } from '../f-element';

type Size = { width: number, height: number };

export abstract class Layout {

	static NO_DIR: number     = -1;
	static VERTICAL: number   = 0;
	static HORIZONTAL: number = 1;

	#owner: any;
	#degree: number;
	#direction: number;

	constructor(owner: any, degree: number, direction: number = Layout.NO_DIR) {
		this.#owner     = owner;
		this.#degree    = degree;
		this.#direction = direction;
	}

	abstract name(): string;

	getOwner(): any {
		return this.#owner;
	}

	getDegree(): number {
		return this.#degree;
	}

	getDirection(): number {
		return this.#direction;
	}

	getEstimatedMinimumSize(children: FElement[]): Size {
		const ss: Size[] = children.map(e => e.getEstimatedMinimumSize());
		return this._calcSize(ss);
	}

	getEstimatedMinimumSizeIf(children: FElement[], child: FElement, minSize: Size): Size {
		const ss: Size[] = children.map(e => ((child === e) ? minSize : e.getEstimatedMinimumSize()));
		return this._calcSize(ss);
	}

	getMinimumSize(children: FElement[]): Size {
		const ss: Size[] = children.map(e => e.getMinimumSize());
		return this._calcSize(ss);
	}

	getMaximumSize(): Size {
		return { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	}

	abstract _calcSize(sizes: Size[]): Size;

	abstract doLayout(children: FElement[], size: Size): void;

}

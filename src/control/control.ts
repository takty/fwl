type Size = { width: number, height: number };

export abstract class Control {

	#degree: number;
	#minSize: Size = { width: 0, height: 0 };
	#maxSize: Size = { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	_owner: any;

	constructor(owner: any, degree: number) {
		this._owner = owner;
		this.#degree = degree;
	}

	abstract name(): string;

	getDegree(): number {
		return this.#degree;
	}

	addPossibleDegreesTo(dest: Set<number>): void {
		dest.add(this.#degree);
	}

	setMinimumSize(s: Size): void {
		this.#minSize = { ...s };
	}

	getMinimumSize(): Size {
		return { ...this.#minSize };
	}

	setMaximumSize(s: Size): void {
		this.#maxSize = { ...s };
	}

	getMaximumSize(): Size {
		return { ...this.#maxSize };
	}

}

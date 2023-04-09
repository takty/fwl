
class Control {

	#degree;
	#minSize = { width: 0, height: 0 };
	#maxSize = { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	_owner;

	constructor(owner, degree) {
		this._owner = owner;
		this.#degree = degree;
	}

	getDegree() {
		return this.#degree;
	}

	addPossibleDegreesTo(dest) {
		dest.add(this.#degree);
	}

	setMinimumSize(s) {
		this.#minSize = { ...s };
	}

	getMinimumSize() {
		return { ...this.#minSize };
	}

	setMaximumSize(s) {
		this.#maxSize = { ...s };
	}

	getMaximumSize() {
		return { ...this.#maxSize };
	}

}

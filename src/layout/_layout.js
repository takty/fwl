
class Layout {

	static NO_DIR     = -1;
	static VERTICAL   = 0;
	static HORIZONTAL = 1;

	#owner;
	#degree;
	#direction;

	constructor(owner, degree, direction = Layout.NO_DIR) {
		this.#owner     = owner;
		this.#degree    = degree;
		this.#direction = direction;
	}

	getOwner() {
		return this.#owner;
	}

	getDegree() {
		return this.#degree;
	}

	getDirection() {
		return this.#direction;
	}

	getEstimatedMinimumSize(children) {
		const ss = children.map(e => e.getEstimatedMinimumSize());
		return this._calcSize(ss);
	}

	getEstimatedMinimumSizeIf(children, child, minSize) {
		const ss = children.map(e => ((child === e) ? minSize : e.getEstimatedMinimumSize()));
		return this._calcSize(ss);
	}

	getMinimumSize(children) {
		const ss = children.map(e => e.getMinimumSize(e));
		return this._calcSize(ss);
	}

	getMaximumSize() {
		return { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	}

}

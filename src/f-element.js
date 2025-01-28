import * as stlics from 'stlics/stlics';

export class FElement {

	#parent   = null;
	#type     = null;
	#size     = { width: 0, height: 0 };
	#location = { x: 0, y: 0 };

	_estMinSize = { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	_states     = [];
	_cans       = [];
	_baseCans   = [];

	name() {
		return '';
	}

	setParent(parent) {
		this.#parent = parent;
	}

	getParent() {
		return this.#parent;
	}

	getVariable() {
		return this.#type;
	}


	// -------------------------------------------------------------------------


	getEstimatedMinimumSize() {
		return { ...this._estMinSize };
	}

	_getCandidateEntries() {
		return [];
	}

	_assignCandidates(worstDeg, dest) {
		dest.length = 0;
		for (const [d, e] of this._getCandidateEntries()) {
			if (worstDeg <= d) {
				dest.push(e(this));
			}
		}
	}

	initializeProblem(p) {
		this._assignCandidates(0, this._cans);
		this._baseCans = [ ...this._cans ];

		this.#type = p.createVariable(stlics.Domain.create([0]), 0, this.name() + ': type');

		p.createConstraint(
			(v0) => this.#typeRelation(v0),
			[this.#type],
			this.name() + ': type',
		);
	}

	#typeRelation(val) {
		if (this._states.length === 0) {
			return 0;
		}
		const pc = this._typeToCandidate(val);
		return pc.getDegree();
	}

	_typeToCandidate(val = null) {
		if (val === null && this.#type) {
			val = this.#type.value();
		}
		if (this._states[val]) {
			return this._cans[this._states[val].comb[0]];
		}
		return null;
	}

	isValid() {
		if (!this.#type || this.#type.isEmpty()) return false;
		if (!this._states[this.#type.value()]) return false;
		return true;
	}


	// -------------------------------------------------------------------------


	getMinimumSize() {
		return { ...this._states[this.#type.value()].size };
	}

	getMaximumSize() {
		return this._typeToCandidate().getMaximumSize();
	}

	/**
	 * Gets the size of an element.
	 * @return Size.
	 */
	getSize() {
		return { ...this.#size };
	}

	/**
	 * Sets the size of the element.
	 * @param width Width.
	 * @param height Height.
	 */
	setSize(width, height) {
		this.#size = { width, height };
	}

	/**
	 * Gets the element location.
	 * @return Location.
	 */
	getLocation() {
		return { ...this.#location };
	}

	/**
	 * Sets the location of the element.
	 * @param x X.
	 * @param y Y.
	 */
	setLocation(x, y) {
		this.#location = { x, y };
	}

}

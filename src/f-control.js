import { FElement } from './f-element.js';

export class FControl extends FElement {

	name() {
		const can = this._typeToCandidate();
		return can?.name() ?? 'control';
	}

	initializeEstimatedMinimumSize() {
		let width  = Number.MAX_SAFE_INTEGER;
		let height = Number.MAX_SAFE_INTEGER;

		for (const can of this._cans) {
			const d = can.getMinimumSize();
			width  = Math.min(width, d.width);
			height = Math.min(height, d.height);
		}
		this._estMinSize = { width, height };
	}

	initializeDomain(p) {
		this._states.length = 0;

		for (let i = 0; i < this._cans.length; i += 1) {
			const size = this._cans[i].getMinimumSize();

			if (this.getParent().checkGivenMaximumSize(this, size)) {
				this._states.push({ comb: [i], size });
			}
		}
		if (this._states.length === 0) {
			return false;
		}
		this.getVariable().domain(p.createDomain(0, this._states.length - 1));
		return true;
	}

	setWorstDegree(deg) {
		this._assignCandidates(deg, this._cans);
		if (this._cans.length === 0) {
			return false;
		}
		return true;
	}

	addPossibleDegreesTo(dest) {
		for (const can of this._baseCans) {
			can.addPossibleDegreesTo(dest);
		}
	}

}

import * as stlics from 'stlics/stlics';
import { FElement } from './f-element.js';
import { Layout } from './layout/layout.js';

export class FLayout extends FElement {

	static SAME_DIRECTION = 0.50;

	#children = [];

	name() {
		const can = this._typeToCandidate();
		return can?.name() ?? 'layout';
	}

	add(child) {
		child.setParent(this);
		this.#children.push(child);
	}

	children() {
		return this.#children;
	}

	getDescendantSize() {
		let size = this.#children.length;

		for (const c of this.#children) {
			if (c instanceof FLayout) {
				size += c.getDescendantSize();
			}
		}
		return size;
	}


	// -------------------------------------------------------------------------


	initializeProblem(p) {
		super.initializeProblem(p);

		for (let i = 0; i < this.#children.length; ++i) {
			const c = this.#children[i];
			c.initializeProblem(p);

			p.createConstraint(
				(v0, v1) => this.#correspondingRelation(i, v0, v1),
				[this.getVariable(), c.getVariable()],
				this.name() + ': toChild',
			);
			if (c instanceof FLayout) {
				p.createConstraint(
					(v0, v1) => this.#differentDirectionRelation(c, v0, v1),
					[this.getVariable(), c.getVariable()],
					this.name() + ': toChild',
				);
			}
		}
	}

	#correspondingRelation(childIndex, val1, val2) {
		const s = this._states[val1];
		if (s.comb[childIndex + 1] === val2) {
			return 1;
		}
		return 0;
	}

	#differentDirectionRelation(childLayout, val1, val2) {
		const pd = this._typeToCandidate(val1).getDirection();
		const cd = childLayout._typeToCandidate(val2).getDirection();
		if (pd !== Layout.NO_DIR && cd !== Layout.NO_DIR && pd === cd) {
			return FLayout.SAME_DIRECTION;
		}
		return 1;
	}


	// -------------------------------------------------------------------------


	initializeEstimatedMinimumSize() {
		for (const c of this.#children) {
			c.initializeEstimatedMinimumSize();
		}
		let width  = Number.MAX_SAFE_INTEGER;
		let height = Number.MAX_SAFE_INTEGER;

		for (const can of this._cans) {
			const d = can.getEstimatedMinimumSize(this.#children);
			width  = Math.min(width, d.width);
			height = Math.min(height, d.height);
		}
		this._estMinSize = { width, height };
	}

	initializeDomain(p) {
		for (const c of this.#children) {
			if (!c.initializeDomain(p)) {
				return false;
			}
		}
		const comb = new Array(this.#children.length + 1).fill(0);
		const lens = new Array(this.#children.length + 1).fill(0);

		lens[0] = this._cans.length;
		for (let i = 0; i < this.#children.length; ++i) {
			lens[i + 1] = this.#children[i]._states.length;
		}

		let width  = Number.MAX_SAFE_INTEGER;
		let height = Number.MAX_SAFE_INTEGER;

		this._states.length = 0;

		do {  // Try assigning a value and check the size.
			for (let i = 0; i < this.#children.length; ++i) {
				const c = this.#children[i];
				c.getVariable().assign(comb[i + 1]);
			}
			const size = this._cans[comb[0]].getMinimumSize(this.#children);

			if (this.getParent().checkGivenMaximumSize(this, size)) {
				this._states.push({ comb: [...comb], size });
				width  = Math.min(width, size.width);
				height = Math.min(height, size.height);
			}
		} while (this.#increment(comb, lens));

		for (const c of this.#children) {
			c.getVariable().clear();
		}
		this._estMinSize = { width, height };

		if (this._states.length === 0) {
			return false;
		}
		this.getVariable().domain(p.createDomain(0, this._states.length - 1));
		return true;
	}

	#increment(comb, lens) {
		for (let i = 0; i < comb.length; ++i) {
			comb[i]++;
			if (comb[i] < lens[i]) break;
			if (i === comb.length - 1) return false;
			comb[i] = 0;
		}
		return true;
	}

	checkGivenMaximumSize(child, childMinSize) {
		for (const lt of this._cans) {
			const min = lt.getEstimatedMinimumSizeIf(this.#children, child, childMinSize);
			if (this.getParent().checkGivenMaximumSize(this, min)) {
				return true;
			}
		}
		return false;
	}

	setWorstDegree(deg) {
		this._assignCandidates(deg, this._cans);
		if (this._cans.length === 0) {
			return false;
		}
		for (const c of this.#children) {
			if (!c.setWorstDegree(deg)) {
				return false;
			}
		}
		return true;
	}

	addPossibleDegreesTo(dest) {
		for (const can of this._baseCans) {
			dest.add(can.getDegree());
		}
		for (const c of this.#children) {
			c.addPossibleDegreesTo(dest);
		}
		dest.add(FLayout.SAME_DIRECTION);
	}


	// -------------------------------------------------------------------------


	doLayout() {
		const can = this._typeToCandidate();
		can.doLayout(this.#children, this.getSize());
	}

}

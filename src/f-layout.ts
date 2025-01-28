import * as stlics from 'stlics/stlics';
import { FElement } from './f-element';
import { Layout } from './layout/layout';

type Size = { width: number, height: number };

export class FLayout extends FElement {

	static SAME_DIRECTION: number = 0.50;

	#children: FElement[] = [];

	name(): string {
		const can = this._typeToCandidate();
		return can?.name() ?? 'layout';
	}

	add(child: FElement): void {
		child.setParent(this);
		this.#children.push(child);
	}

	children(): FElement[] {
		return this.#children;
	}

	getDescendantSize(): number {
		let size: number = this.#children.length;

		for (const c of this.#children) {
			if (c instanceof FLayout) {
				size += c.getDescendantSize();
			}
		}
		return size;
	}


	// -------------------------------------------------------------------------


	initializeProblem(p: stlics.Problem): void {
		super.initializeProblem(p);

		for (let i: number = 0; i < this.#children.length; ++i) {
			const c: FElement = this.#children[i];
			c.initializeProblem(p);

			p.createConstraint(
				(v0: number, v1: number): number => this.#correspondingRelation(i, v0, v1),
				[this.getVariable(), c.getVariable()],
				this.name() + ': toChild',
			);
			if (c instanceof FLayout) {
				p.createConstraint(
					(v0: number, v1: number): number => this.#differentDirectionRelation(c, v0, v1),
					[this.getVariable(), c.getVariable()],
					this.name() + ': toChild',
				);
			}
		}
	}

	#correspondingRelation(childIndex: number, val1: number, val2: number): number {
		const s = this._states[val1];
		if (s.comb[childIndex + 1] === val2) {
			return 1;
		}
		return 0;
	}

	#differentDirectionRelation(childLayout: FLayout, val1: number, val2: number): number {
		const pd: number = (this._typeToCandidate(val1) as Layout).getDirection();
		const cd: number = (childLayout._typeToCandidate(val2) as Layout).getDirection();
		if (pd !== Layout.NO_DIR && cd !== Layout.NO_DIR && pd === cd) {
			return FLayout.SAME_DIRECTION;
		}
		return 1;
	}


	// -------------------------------------------------------------------------


	initializeEstimatedMinimumSize(): void {
		for (const c of this.#children) {
			c.initializeEstimatedMinimumSize();
		}
		let width: number  = Number.MAX_SAFE_INTEGER;
		let height: number = Number.MAX_SAFE_INTEGER;

		for (const can of this._cans) {
			const d: Size = (can as Layout).getEstimatedMinimumSize(this.#children);
			width  = Math.min(width, d.width);
			height = Math.min(height, d.height);
		}
		this._estMinSize = { width, height };
	}

	initializeDomain(p: stlics.Problem): boolean {
		for (const c of this.#children) {
			if (!c.initializeDomain(p)) {
				return false;
			}
		}
		const comb: number[] = new Array(this.#children.length + 1).fill(0);
		const lens: number[] = new Array(this.#children.length + 1).fill(0);

		lens[0] = this._cans.length;
		for (let i: number = 0; i < this.#children.length; ++i) {
			lens[i + 1] = this.#children[i]._states.length;
		}

		let width: number  = Number.MAX_SAFE_INTEGER;
		let height: number = Number.MAX_SAFE_INTEGER;

		this._states.length = 0;

		do {  // Try assigning a value and check the size.
			for (let i: number = 0; i < this.#children.length; ++i) {
				const c: FElement = this.#children[i];
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

	#increment(comb: number[], lens: number[]): boolean {
		for (let i: number = 0; i < comb.length; ++i) {
			comb[i]++;
			if (comb[i] < lens[i]) break;
			if (i === comb.length - 1) return false;
			comb[i] = 0;
		}
		return true;
	}

	checkGivenMaximumSize(child, childMinSize: Size): boolean {
		for (const lt of this._cans) {
			const min: Size = (lt as Layout).getEstimatedMinimumSizeIf(this.#children, child, childMinSize);
			if (this.getParent().checkGivenMaximumSize(this, min)) {
				return true;
			}
		}
		return false;
	}

	setWorstDegree(deg: number): boolean {
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

	addPossibleDegreesTo(dest: Set<number>): void {
		for (const can of this._baseCans) {
			dest.add(can.getDegree());
		}
		for (const c of this.#children) {
			c.addPossibleDegreesTo(dest);
		}
		dest.add(FLayout.SAME_DIRECTION);
	}


	// -------------------------------------------------------------------------


	doLayout(): void {
		const can = this._typeToCandidate() as Layout;
		can.doLayout(this.#children, this.getSize());
	}

}

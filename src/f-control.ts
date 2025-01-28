import * as stlics from 'stlics/stlics';
import { FElement } from './f-element';
import { Control } from './control/control';

type Size = { width: number, height: number };

export class FControl extends FElement {

	name(): string {
		const can = this._typeToCandidate();
		return can?.name() ?? 'control';
	}

	initializeEstimatedMinimumSize(): void {
		let width: number  = Number.MAX_SAFE_INTEGER;
		let height: number = Number.MAX_SAFE_INTEGER;

		for (const can of this._cans) {
			const d: Size = (can as Control).getMinimumSize();
			width  = Math.min(width, d.width);
			height = Math.min(height, d.height);
		}
		this._estMinSize = { width, height };
	}

	initializeDomain(p: stlics.Problem): boolean {
		this._states.length = 0;

		for (let i: number = 0; i < this._cans.length; i += 1) {
			const size = (this._cans[i] as Control).getMinimumSize();

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

	setWorstDegree(deg: number): boolean {
		this._assignCandidates(deg, this._cans);
		if (this._cans.length === 0) {
			return false;
		}
		return true;
	}

	addPossibleDegreesTo(dest: Set<number>): void {
		for (const can of this._baseCans) {
			(can as Control).addPossibleDegreesTo(dest);
		}
	}

}

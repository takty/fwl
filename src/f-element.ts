import * as stlics from 'stlics/stlics';
import { FLayout } from './f-layout';
import { Layout } from './layout/layout';
import { Control } from './control/control';

type Size = { width: number, height: number };
type Pos = { x: number, y: number };

export abstract class FElement {

	#parent!: FLayout;
	#type!: stlics.Variable;
	#size: Size = { width: 0, height: 0 };
	#location: Pos = { x: 0, y: 0 };

	_estMinSize: Size = { width: Number.MAX_SAFE_INTEGER, height: Number.MAX_SAFE_INTEGER };
	_states: { comb: number[], size: Size }[] = [];
	_cans: (Layout | Control)[]       = [];
	_baseCans: (Layout | Control)[]   = [];

	name(): string {
		return '';
	}

	setParent(parent: FLayout): void {
		this.#parent = parent;
	}

	getParent(): FLayout {
		return this.#parent;
	}

	getVariable(): stlics.Variable {
		return this.#type;
	}


	// -------------------------------------------------------------------------


	getEstimatedMinimumSize(): Size {
		return { ...this._estMinSize };
	}

	_getCandidateEntries(): [number, (e: FElement) => Layout | Control][] {
		return [];
	}

	_assignCandidates(worstDeg: number, dest: (Layout | Control)[]): void {
		dest.length = 0;
		for (const [d, e] of this._getCandidateEntries()) {
			if (worstDeg <= d) {
				dest.push(e(this));
			}
		}
	}

	initializeProblem(p: stlics.Problem): void {
		this._assignCandidates(0, this._cans);
		this._baseCans = [ ...this._cans ];

		this.#type = p.createVariable(stlics.Domain.create([0]), 0, this.name() + ': type');

		p.createConstraint(
			(v0: number): number => this.#typeRelation(v0),
			[this.#type],
			this.name() + ': type',
		);
	}

	abstract initializeEstimatedMinimumSize(): void;

	abstract initializeDomain(p: stlics.Problem): boolean;

	abstract addPossibleDegreesTo(dest: Set<number>): void;

	abstract setWorstDegree(deg: number): boolean;

	#typeRelation(val: number): number {
		if (this._states.length === 0) {
			return 0;
		}
		const pc = this._typeToCandidate(val) as Layout | Control;
		return pc.getDegree();
	}

	_typeToCandidate(val: number | null = null): Layout | Control | null {
		if (val === null && this.#type) {
			val = this.#type.value();
		}
		if (val !== null && this._states[val]) {
			return this._cans[this._states[val].comb[0]] as Layout | Control;
		}
		return null;
	}

	isValid(): boolean {
		if (!this.#type || this.#type.isEmpty()) return false;
		if (!this._states[this.#type.value()]) return false;
		return true;
	}


	// -------------------------------------------------------------------------


	getMinimumSize(): Size {
		return { ...this._states[this.#type.value()].size };
	}

	getMaximumSize(): Size {
		return (this._typeToCandidate() as Layout | Control).getMaximumSize();
	}

	/**
	 * Gets the size of an element.
	 * @return Size.
	 */
	getSize(): Size {
		return { ...this.#size };
	}

	/**
	 * Sets the size of the element.
	 * @param width Width.
	 * @param height Height.
	 */
	setSize(width: number, height: number): void {
		this.#size = { width, height };
	}

	/**
	 * Gets the element location.
	 * @return Location.
	 */
	getLocation(): Pos {
		return { ...this.#location };
	}

	/**
	 * Sets the location of the element.
	 * @param x X.
	 * @param y Y.
	 */
	setLocation(x: number, y: number): void {
		this.#location = { x, y };
	}

}

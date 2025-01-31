import * as stlics from 'stlics/stlics';
import { FElement } from './f-element';
import { FLayout } from './f-layout';

type Size = { width: number, height: number };

export class FlexibleLayout {

	static DEBUG: boolean = true;

	static SORT_BY_DESCENDANT: boolean  = true;
	static SORT_BY_PATH_LENGTH: boolean = true;

	#root!: FLayout;
	#size: Size = { width: 0, height: 0 };
	#lastDegree: number = 0;

	setRootContainer(cw: FLayout): void {
		this.#root = cw;
		const that = this;
		this.#root.setParent(new class {
			checkGivenMaximumSize(_fe: FElement, size: Size): boolean {
				const h: number = that.#size.height;
				const w: number = that.#size.width;
				return (size.height <= h && size.width <= w);
			}
		}() as FLayout);
	}

	getRootContainer(): FLayout {
		return this.#root;
	}

	getLastSatisfactionDegree(): number {
		return this.#lastDegree;
	}

	layoutContainer(ts: Size): boolean {
		if (this.#performLayout(ts)) {
			return true;
		}
		return false;
	}

	#performLayout(targetSize: Size): boolean {
		this.#size = { ...targetSize };
		const p = new stlics.Problem();
		this.#root.initializeProblem(p);
		this.#sortVariablesInBreadthFirstOrder(p);

		this.#setWorstDegree(p, 0);
		const pd: Set<number> = stlics.possibleDegreesOfProblem(p);
		if (!this.#solveProblem(p, pd)) return false;

		this.#root.setSize(this.#size.width, this.#size.height);
		this.#root.setLocation(0, 0);
		this.#root.doLayout();
		return true;
	}

	#solveProblem(p: stlics.Problem, possibleDegrees: Set<number>): boolean {
		let time: number = 0;
		if (FlexibleLayout.DEBUG) {
			console.log('\nsolveProblem - started');
			time = Date.now();
		}
		let success: boolean = false;
		const pds: number[] = [...possibleDegrees.values()].sort((a, b) => b - a);

		for (const r of pds) {
			if (r <= 0) continue;
			if (FlexibleLayout.DEBUG) console.log(`\tIteration in wsd ${r}`);
			if (!this.#setWorstDegree(p, r)) continue;

			const mon = new stlics.Monitor();
			mon.setTarget(r);
			mon.setTimeLimit(100);

			const solver = new stlics.FuzzyForwardChecking();
			solver.setPrePruningDegree(r - Number.EPSILON);

			if (solver.solve(p, mon)) {
				success = true;
				this.#lastDegree = r;
				break;
			}
		}
		if (FlexibleLayout.DEBUG) {
			console.log(`solveProblem - finished (${success}, wsd = ${p.degree()})\n`);
			console.log(`time: ${Date.now() - time}`);
		}
		return success;
	}

	#setWorstDegree(p: stlics.Problem, worstDesirability: number): boolean {
		const res: boolean = this.#root.setWorstDegree(worstDesirability);
		if (!res) {
			console.log('Failure: initializeDomain');
			return false;
		}

		this.#root.initializeEstimatedMinimumSize();
		if (!this.#root.initializeDomain(p)) {
			console.log('Failure: initializeDomain');
			return false;
		}

		return true;
	}

	#sortVariablesInBreadthFirstOrder(p: stlics.Problem): void {
		const lens: number[] = stlics.averagePathLengths(p);
		const vs: stlics.Variable[] = [this.#root.getVariable()];
		let ls: FLayout[] = [this.#root];

		while (ls.length > 0) {
			const nls: FLayout[] = [];

			for (const l of ls) {
				for (const c of l.children()) {
					if (c instanceof FLayout) {
						nls.push(c);
					}
				}
			}
			this.#sortVariablesInCertainOrder(nls, lens);
			for (const l of nls) {
				vs.push(l.getVariable());
			}
			ls = nls;
		}
		p.sortVariables((o1: stlics.Variable, o2: stlics.Variable): number => {
			return vs.indexOf(o1) - vs.indexOf(o2);
		});
	}

	#sortVariablesInCertainOrder(ls: FLayout[], lens: number[]): void {
		ls.sort((l1: FLayout, l2: FLayout): number => {
			if (FlexibleLayout.SORT_BY_DESCENDANT) {
				const ds1: number = l1.getDescendantSize();
				const ds2: number = l2.getDescendantSize();
				const r: number = ds2 - ds1;
				if (r !== 0) return r;
			}
			if (FlexibleLayout.SORT_BY_PATH_LENGTH) {
				const len1: number = lens[l1.getVariable().index()];
				const len2: number = lens[l2.getVariable().index()];
				return len2 - len1;
			}
			return 0;
		});
	}

}


class FlexibleLayout {

	static DEBUG = true;

	static SORT_BY_DESCENDANT  = true;
	static SORT_BY_PATH_LENGTH = true;

	#root;
	#size = { width: 0, height: 0 };
	#lastDegree;

	setRootContainer(cw) {
		this.#root = cw;
		const that = this;
		this.#root.setParent(new class {
			checkGivenMaximumSize(fe, size) {
				const h = that.#size.height;
				const w = that.#size.width;
				return (size.height <= h && size.width <= w);
			}
		}());
	}

	getRootContainer() {
		return this.#root;
	}

	getLastSatisfactionDegree() {
		return this.#lastDegree;
	}

	layoutContainer(ts) {
		if (this.#performLayout(ts)) {
			return true;
		}
		return false;
	}

	#performLayout(targetSize) {
		this.#size = { ...targetSize };
		const p = new Problem();
		this.#root.initializeProblem(p);
		this.#sortVariablesInBreadthFirstOrder(p);

		const pd = new Set();
		this.#root.addPossibleDegreesTo(pd);
		if (!this.#solveProblem(p, pd)) return false;

		this.#root.setSize(this.#size.width, this.#size.height);
		this.#root.setLocation(0, 0);
		this.#root.doLayout();
		return true;
	}

	#solveProblem(p, possibleDegrees) {
		let time = 0;
		if (FlexibleLayout.DEBUG) {
			console.log('\nsolveProblem - started');
			time = Date.now();
		}
		let success = false;
		const pds = [...possibleDegrees.values()].sort((a, b) => b - a);

		for (const r of pds) {
			if (r <= 0) continue;
			if (FlexibleLayout.DEBUG) console.log(`\tIteration in wsd ${r}`);
			if (!this.#setWorstDegree(p, r)) continue;

			const solver = new FuzzyForwardChecking(p);
			solver.setTargetRate(r);

			if (solver.solve()) {
				success = true;
				this.#lastDegree = r;
				break;
			}
		}
		if (FlexibleLayout.DEBUG) {
			console.log(`solveProblem - finished (${success}, wsd = ${p.worstSatisfactionDegree()})\n`);
			console.log(`time: ${Date.now() - time}`);
		}
		return success;
	}

	#setWorstDegree(p, worstDesirability) {
		const res = this.#root.setWorstDegree(worstDesirability);
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

	#sortVariablesInBreadthFirstOrder(p) {
		const lens = Problems.averagePathLengths(p);
		const vs   = [this.#root.getVariable()];
		let ls = [this.#root];

		while (ls.length > 0) {
			const nls = [];

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
		p.sortVariables((o1, o2) => {
			return vs.indexOf(o1) - vs.indexOf(o2);
		});
	}

	#sortVariablesInCertainOrder(ls, lens) {
		ls.sort((l1, l2) => {
			if (FlexibleLayout.SORT_BY_DESCENDANT) {
				const ds1 = l1.getDescendantSize();
				const ds2 = l2.getDescendantSize();
				const r = ds2 - ds1;
				if (r !== 0) return r;
			}
			if (FlexibleLayout.SORT_BY_PATH_LENGTH) {
				const len1 = lens[l1.getVariable().index()];
				const len2 = lens[l2.getVariable().index()];
				return len2 - len1;
			}
			return 0;
		});
	}

}

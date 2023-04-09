
class Group extends FLayout {

	constructor(args) {
		super();
		if (args.children) {
			for (const c of args.children) {
				this.add(c);
			}
		}
	}

	_getCandidateEntries() {
		return [
			[0.98, owner => new HorizontalArray(owner, 0.98)],
			[1.0,  owner => new VerticalArray(owner, 1.0)],
		];
	}

}

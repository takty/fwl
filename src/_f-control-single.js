
class Single extends FControl {

	#items;

	constructor(...items) {
		super();
		this.#items = items;
	}

	name() {
		return 'single (' + super.name() + ')';
	}

	_getCandidateEntries() {
		const r = ListBox.createVariableInstances(0.75, 0.9, this.#items);
		r.push([1.0, owner => new RadioButtons(owner, 1.0, this.#items)]);
		return r;
	}

}

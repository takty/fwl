
class Multiple extends FControl {

	#items;

	constructor(...items) {
		super();
		this.#items = items;
	}

	name() {
		return 'multiple (' + super.name() + ')';
	}

	_getCandidateEntries() {
		const r = ListBox.createVariableInstances(0.75, 0.9, this.#items);
		r.push([1.0, owner => new Checkboxes(owner, 1.0, this.#items)]);
		return r;
	}

}

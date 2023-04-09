
class Caption extends FControl {

	#longText;
	#shortText;

	constructor(longText, shortText) {
		super();
		this.#longText  = longText;
		this.#shortText = shortText;
	}

	name() {
		return 'caption (' + super.name() + ')';
	}

	_getCandidateEntries() {
		return [
			[1.0, owner => new Label(owner, 1.0, this.#longText)],
			[0.8, owner => new Label(owner, 0.8, this.#shortText)],
		];
	}

}

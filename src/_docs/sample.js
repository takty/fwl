import * as fwl from '../../dist/fwl.esm.js';

document.addEventListener('DOMContentLoaded', () => {
	LayoutSample.main();
});

class LayoutSample {

	static UNIT = 20;

	static main() {
		const can = document.createElement('canvas');
		document.body.appendChild(can);

		const ls = new LayoutSample();
		ls.initialize();

		LayoutSample.#onResize(can, ls)
		window.addEventListener('resize', () => LayoutSample.#onResize(can, ls));
	}

	static #setCanvasSize(can) {
		can.width  = Math.floor((document.documentElement.clientWidth  - 16) / LayoutSample.UNIT) * LayoutSample.UNIT;
		can.height = Math.floor((document.documentElement.clientHeight - 16) / LayoutSample.UNIT) * LayoutSample.UNIT;
	}

	static #onResize(can, ls) {
		LayoutSample.#setCanvasSize(can);

		const ctx  = can.getContext('2d');
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.scale(20, 20);
		ctx.font = '0.6px san-serif';

		ls.start();
		ls.draw(can);
	}


	// -------------------------------------------------------------------------


	#fl;

	initialize() {
		this.#fl = new fwl.FlexibleLayout();

		// const cw1 = new Group({ children: [new Action("Button 1"), new Action("Button 2")] });
		const cw2 = new fwl.Group({ children: [new fwl.Caption('Long Caption1', 'Caption1'), new fwl.SingleBoolean('OK', 'Cancel')] });

		const c3 = new fwl.Single('Checkbox');
		const rbs = new fwl.Single("Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8");
		const cw3 = new fwl.Group({ children: [c3, rbs] });

		const l = new fwl.Labeling(new fwl.Caption('Long Label2', 'Label2'), new fwl.Single('Checkbox2'));
		const cw = new fwl.Group({ children: [l, cw2, cw3] });
		// const cw = new Group({ children: [cw3] });

		this.#fl.setRootContainer(cw);
	}

	start() {
		const width  = Math.floor((document.documentElement.clientWidth  - 16) / LayoutSample.UNIT);
		const height = Math.floor((document.documentElement.clientHeight - 16) / LayoutSample.UNIT);
		return this.#fl.layoutContainer({ width, height });
	}

	draw(can) {
		const ctx = can.getContext('2d');
		dr(this.#fl.getRootContainer(), 0, 0);

		function dr(r, x, y) {
			const { x: lx, y: ly }  = r.getLocation();
			const { width, height } = r.getSize();

			ctx.strokeStyle = r.isValid() ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.75)';
			ctx.lineWidth = 0.1;
			ctx.strokeRect(x + lx, y + ly, width, height);
			ctx.fillStyle   = 'rgba(0, 0, 0, 0.1)';
			ctx.fillRect(x + lx, y + ly, width, height);

			ctx.strokeStyle = null;
			ctx.fillStyle   = 'rgba(0, 0, 0, 0.5)';
			ctx.fillText(`${r.name()} ${width}, ${height}`, x + lx + 0.1, y + ly + 0.7);

			if (r instanceof fwl.FLayout) {
				for (const c of r.children()) {
					dr(c, lx, ly);
				}
			}
		}
	}

}

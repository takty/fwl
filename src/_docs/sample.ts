import * as fwl from '../../dist/fwl.esm.js';

{
	document.addEventListener('DOMContentLoaded', (): void => {
		main();
	});

	const UNIT: number = 24;

	function main(): void {
		const can: HTMLCanvasElement = document.createElement('canvas');
		document.body.appendChild(can);

		let fl: fwl.FlexibleLayout = initialize();

		onResize(fl, can)
		window.addEventListener('resize', (): void => onResize(fl, can));
	}

	function setCanvasSize(can: HTMLCanvasElement): void {
		can.width  = Math.floor((document.documentElement.clientWidth  - 16) / UNIT) * UNIT;
		can.height = Math.floor((document.documentElement.clientHeight - 16) / UNIT) * UNIT;
	}

	function onResize(fl: fwl.FlexibleLayout, can: HTMLCanvasElement): void {
		setCanvasSize(can);

		const ctx: CanvasRenderingContext2D = can.getContext('2d') as CanvasRenderingContext2D;
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.font = '12px san-serif';

		start(fl);
		draw(fl, ctx);
	}


	// -------------------------------------------------------------------------


	function initialize(): fwl.FlexibleLayout {
		const fl = new fwl.FlexibleLayout();

		// const cw1 = new Group({ children: [new Action("Button 1"), new Action("Button 2")] });
		const cw2 = new fwl.Group({ children: [new fwl.Caption('Long Caption1', 'Caption1'), new fwl.SingleBoolean('OK', 'Cancel')] });

		const c3 = new fwl.Single('Checkbox');
		const rbs = new fwl.Single("Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8");
		const cw3 = new fwl.Group({ children: [c3, rbs] });

		const l = new fwl.Labeling(new fwl.Caption('Long Label2', 'Label2'), new fwl.Single('Checkbox2'));
		const cw = new fwl.Group({ children: [l, cw2, cw3] });
		// const cw = new Group({ children: [cw3] });

		fl.setRootContainer(cw);
		return fl;
	}

	function start(fl: fwl.FlexibleLayout): boolean {
		const width: number  = Math.floor((document.documentElement.clientWidth  - 16) / UNIT);
		const height: number = Math.floor((document.documentElement.clientHeight - 16) / UNIT);
		return fl.layoutContainer({ width, height });
	}

	function draw(fl: fwl.FlexibleLayout, ctx: CanvasRenderingContext2D): void {
		dr(fl.getRootContainer(), 0, 0);

		function dr(r: fwl.FElement, x: number, y: number): void {
			const { x: lx, y: ly }  = r.getLocation();
			const { width, height } = r.getSize();

			ctx.strokeStyle = r.isValid() ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.75)';
			ctx.lineWidth = 0.1;
			ctx.strokeRect(x * UNIT + lx * UNIT, y * UNIT + ly * UNIT, width * UNIT, height * UNIT);
			ctx.fillStyle   = 'rgba(0, 0, 0, 0.1)';
			ctx.fillRect(x * UNIT + lx * UNIT, y * UNIT + ly * UNIT, width * UNIT, height * UNIT);

			ctx.strokeStyle = '';
			ctx.fillStyle   = 'rgba(0, 0, 0, 0.85)';
			ctx.fillText(`${r.name()} ${width}, ${height}`, x * UNIT + (lx + 0.1) * UNIT, y * UNIT + (ly + 0.7) * UNIT);

			if (r instanceof fwl.FLayout) {
				for (const c of r.children()) {
					dr(c, lx, ly);
				}
			}
		}
	}
}

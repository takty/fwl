import * as fwl from '../../dist/fwl.esm.js';

{
	document.addEventListener('DOMContentLoaded', (): void => {
		main();
	});

	const UNIT: number = 24;

	let isResizing: boolean = false;

	let lastX: number = 0;
	let lastY: number = 0;

	const offscreenCanvas: HTMLCanvasElement = document.createElement('canvas');
	const offscreenCtx: CanvasRenderingContext2D = offscreenCanvas.getContext('2d') as CanvasRenderingContext2D;

	function main(): void {
		const can: HTMLCanvasElement = document.createElement('canvas');
		document.body.appendChild(can);
		can.style.border = '1px solid #0005';
		can.width  = 400;
		can.height = 560;

		const ctx: CanvasRenderingContext2D = can.getContext('2d') as CanvasRenderingContext2D;

		let fl: fwl.FlexibleLayout = initialize();
		let st: number = 0;

		can.addEventListener('mousemove', (e: MouseEvent): void => {
			if (e.offsetX >= can.width - UNIT && e.offsetY >= can.height - UNIT) {
				document.body.style.cursor = 'nw-resize';
				e.stopPropagation();
			} else {
				document.body.style.cursor = '';
			}
		});
		can.addEventListener('mousedown', (e: MouseEvent): void => {
			if (e.offsetX >= can.width - UNIT && e.offsetY >= can.height - UNIT) {
				isResizing = true;
				lastX = e.clientX;
				lastY = e.clientY;
			}
		});
		window.addEventListener('mousemove', (event: MouseEvent): void => {
			document.body.style.cursor = '';
			if (isResizing) {
				const dX: number = event.clientX - lastX;
				const dY: number = event.clientY - lastY;

				can.width  = Math.max(400, can.width + dX);
				can.height = Math.max(400, can.height + dY);

				if (offscreenCtx) {
					ctx?.drawImage(offscreenCanvas, 0, 0);
					drawResizeSign(can, ctx);
				}

				lastX = event.clientX;
				lastY = event.clientY;

				clearTimeout(st);
				st = setTimeout((): void => {
					onResize(fl, can, ctx);
				}, 100);
			}
		});
		window.addEventListener('mouseup', (): void => {
			isResizing = false;
		});

		onResize(fl, can, ctx)
	}

	function onResize(fl: fwl.FlexibleLayout, can: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.font = '12px san-serif';

		start(fl, can.width, can.height);
		draw(fl, ctx);
		if (offscreenCtx) {
			offscreenCanvas.width = can.width;
			offscreenCanvas.height = can.height;
			offscreenCtx.drawImage(can, 0, 0);
		}

		drawResizeSign(can, ctx);
	}


	// -------------------------------------------------------------------------


	function drawResizeSign(can: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
		if (ctx) {
			const size: number = UNIT;
			ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
			ctx.fillRect(can.width - size, can.height - size, size, size);

			ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.lineWidth = 2;
			for (let i: number = 0; i < size; i += 6) {
				ctx.beginPath();
				ctx.moveTo(can.width - i, can.height); // 右下の線を引く
				ctx.lineTo(can.width, can.height - i);
				ctx.stroke();
			}
		}
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

	function start(fl: fwl.FlexibleLayout, cw: number, ch: number): boolean {
		const width: number  = Math.floor(cw / UNIT);
		const height: number = Math.floor(ch / UNIT);
		return fl.layoutContainer({ width, height });
	}

	function draw(fl: fwl.FlexibleLayout, ctx: CanvasRenderingContext2D): void {
		dr(fl.getRootContainer(), 0, 0);

		function dr(r: fwl.FElement, x: number, y: number): void {
			const { x: lx, y: ly }  = r.getLocation();
			const { width, height } = r.getSize();

			ctx.strokeStyle = r.isValid() ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.75)';
			ctx.lineWidth = 1;
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

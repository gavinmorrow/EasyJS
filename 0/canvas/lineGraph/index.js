// © 2021 Gavin Morrow
// EasyJS Canvas

const lineGraph = {
	LineGraph: class {
		constructor (canvas, x = 0, y = 0, points = [], draw = true) {
			this.canvas = canvas;
			this.ctx = this.canvas.getContext("2d");

			this.x = x;
			this.y = y;
			this.points = points;

			if (draw) this.draw();
		}
		draw (clear = true) {
			this.ctx.beginPath();
			if (clear) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.moveTo(this.x, this.y);
			for (const point of this.points) {
				this.ctx.lineTo(point.x, point.y);
			}
			this.ctx.stroke();
		}
		addPoint (point, redraw = true) {
			this.points.push(point);
			if (redraw) this.draw();
		}
		removePoint (...args) {
			const next = (redraw, clear) => redraw ? this.draw(clear) : void 0;

			let first = false;
			switch (typeof args[1]) {
				case "number":
					const [x = 0, y = 0, redraw1 = true, clear1 = undefined] = args;
					let i;

					first = true;

					for (const point of this.points) {
						if (point.x === x && point.y === y) {
							i = this.points.indexOf(point);
							break;
						}
					}

					next(redraw1, clear1);
				case "boolean":
					const [index, redraw = true, clear = undefined] = first ? [i, redraw1, clear1] : args;

					for (let i = index; i < this.points.length; i++) {
						if (this.points[i+1]) this.points[i] = this.points[i+1];
						else this.points.pop();
					}

					next(redraw1, clear1);
					break;
				default:
					break;
			}
			
			// if (typeof args[1] == "number") {
			// 	const [x = 0, y = 0, redraw = true, clear = undefined] = args;

			// 	for (const point of this.points) {
			// 		if (point.x === x && point.y === y) {
			// 			index = this.points.indexOf(point);
			// 			break;
			// 		}
			// 	}

			// 	next(redraw, clear);
			// } else if (typeof args[1] == "boolean")  {
			// 	const [index, redraw = true, clear = undefined] = args;

			// 	for (let i = index; i < this.points.length; i++) {
			// 		if (this.points[i+1]) this.points[i] = this.points[i+1];
			// 		else this.points.pop();
			// 	}

			// 	next(redraw, clear);
			// }

			// if (typeof redraw === "number") {
			// 	const x = index;
			// 	const y = redraw;
			// 	for (const point of this.points) {
			// 		if (point.x === x && point.y === y) {
			// 			index = this.points.indexOf(point);
			// 			break;
			// 		}
			// 	}
			// }

			// for (let i = index; i < this.points.length; i++) {
			// 	if (this.points[i+1]) this.points[i] = this.points[i+1];
			// 	else this.points.pop();
			// }
		}
	}
};

export default lineGraph;
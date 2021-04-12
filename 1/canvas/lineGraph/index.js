// © 2021 Gavin Morrow
// EasyJS Canvas

const lineGraph = {
	LineGraph: class {
		constructor (canvas, x = 0, y = 0, points = [], draw = true) {
			this.canvas = canvas;
			this.ctx = this.canvas.getContext("2d");

			this.points = points;
			this.points.unshift({x, y});

			if (draw) this.draw();
		}
		draw (clear = true) {
			this.ctx.beginPath();
			if (clear) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.moveTo(this.points[0].x, this.points[0].y);
			for (const point of this.points) {
				this.ctx.lineTo(point.x, point.y);
			}
			this.ctx.stroke();
		}
		addPoint (point, index = this.points.length, redraw = true) {
			this.points[index] = point;
			if (redraw) this.draw();
			return this.points.length;
		}
		removePoint (...args) {
			const next = (redraw, clear) => redraw ? this.draw(clear) : void 0;

			let removed;

			let first = false;
			switch (typeof args[1]) {
				case "number":
					const [x = 0, y = 0, redraw1 = true, clear1 = undefined] = args;
					let i;

					first = true;

					i = this.getPoint(x, y);
				case "boolean":
					const [index, redraw = true, clear = undefined] = first ? [i, redraw1, clear1] : args;

					for (let i = index; i < this.points.length; i++) {
						if (this.points[i+1]) this.points[i] = this.points[i+1];
						else removed = this.points.pop();
					}

					next(redraw, clear);
				default:
					return removed;
			}
		}
		getPoint (arg1, arg2) {
			if (arg2 != undefined) {
				const x = arg1;
				const y = arg2;

				for (let i = 0; i < this.points.length; i++) {
					const point = this.points[i];
					if (point.x == x && point.y == y) return this.points.indexOf(point);
				}

				throw new Error("No such point.");
			}
			if (this.points[arg1] == undefined) throw new Error("Index out of bounds.");
			return this.points[arg1];
		}
		changePoint(index, newValue, redraw = true, clear = undefined) {
			this.points[index] = newValue;
			if (redraw) this.draw(clear);

			return this.points[index];
		}
	}
};

export default lineGraph;
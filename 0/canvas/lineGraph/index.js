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
		draw () {
			this.ctx.beginPath();
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
		removePoint (index, y) {
			if (y) {
				const x = index;
				for (const point of this.points) {
					if (point.x === x && point.y === y) index = this.points.indexOf(point);
				}
			}

			for (let i = index; i < this.points.length; i++) {
				if (this.points[i+1]) this.points[i] = this.points[i+1];
				else delete this.points[i];
			}
		}
	}
};

export default lineGraph;
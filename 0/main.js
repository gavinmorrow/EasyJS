// © 2021 Gavin Morrow
// EasyJS

const EasyJSVersion = class {
	constructor (v = 0) {
		(async () => {
			this.math = await import(`./${v}/math/`).then(r => r.default);
			this.string = await import(`./${v}/string/`).then(r => r.default);
			this.ui = await import(`./${v}/ui/`).then(r => r.default);
		}).bind(this)();
	}
}
// © 2021 Gavin Morrow
// EasyJS

const EasyJSVersion = class {
	constructor (v = 0) {
		const awaiter = async name => await import(`./${v}/${name}/${name}.js`).then(r => r.default);

		(async () => {
			const divisions = ["canvas", "math", "string", "ui"];

			for (const division of divisions) {
				this[division] = await awaiter(division);
			}
		}).bind(this)();
	}
}

export default EasyJSVersion;
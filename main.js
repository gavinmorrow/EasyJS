// © 2021 Gavin Morrow
// EasyJS

const EasyJSVersion = async (v = 0) => {
	const EasyJSVersion = class {
		done = false;
	
		constructor (v = 0) {
			const awaiter = async name => await import(`./${v}/${name}/${name}.js`).then(r => r.default);
	
			(async () => {
				const divisions = ["canvas", "math", "string", "ui"];
	
				for (const division of divisions) {
					this[division] = await awaiter(division);
				}
	
				this.done = true;
	
				return this;
			}).bind(this)();
		}
	};

	const EasyJS = new EasyJSVersion(v);

	const i = setInterval(() => {
		console.log(EasyJS.done, EasyJS.done ? Date.now() : void(0));
		if (EasyJS.done) {
			clearInterval(i);
			return EasyJS;
		}
	});
}

export default EasyJSVersion;
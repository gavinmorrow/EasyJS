// EasyJS Errors

class NamedError extends Error {
	constructor(name, msg) {
		super(msg);
		this.name = name;
	}
}

export default NamedError;
// EasyJS Errors

class NamedError extends Error {
	customName = "";
	constructor(name = "Error", msg = "") {
		super(msg);
		this.name = name;
	}
}

export default NamedError;
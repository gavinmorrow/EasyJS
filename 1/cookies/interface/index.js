// EasyJS Cookies

class Cookie {
	constructor (name, value = "", expires = "", path = "/") {
		this.name = name;
		this.value = value;
		this.expires = expires;
		this.path = path;

		document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
	}
};

export default Cookie;
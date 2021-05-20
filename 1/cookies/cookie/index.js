// EasyJS Cookies

class Cookie {
	static get (name) {
		const or = (a, b) => (a === undefined || a === null) ? b : a;
		const getValue = name => {
			const match = new RegExp(`${name}=([^;]*);`).exec(document.cookie);
			if (match) return or(match[1], null);
			else return null;
		}
		const value = or(getValue(name), "");
		const expires = or(getValue(`${name}-expires`), "");
		const path = or(getValue(`${name}-path`), "/");
		return new Cookie(name, value, expires, path);
		return null;
	};
	constructor (name, value = "", expires = "", path = "/") {
		this.name = name;
		this.txt = value;
		this.expires = expires;
		this.path = path;

		this.value = this.txt;
		Cookie.cookies[this.name] = this;
	}
	get value () {
		return this.txt;
	}
	set value (value) {
		this.txt = value;
		document.cookie = `${this.name}=${this.txt}; expires=${this.expires}; path=${this.path}`;
		document.cookie = `${this.name}-expires=${this.expires}; expires=${this.expires}; path=${this.path}`;
		document.cookie = `${this.name}-path=${this.path}; expires=${this.expires}; path=${this.path}`;
	}
	delete () {
		document.cookie = `${this.name}=${this.txt}; expires=Fri, 13 Mar 2015 00:00:00 GMT; path=${this.path}`;
		document.cookie = `${this.name}-expires=${this.expires}; expires=Fri, 13 Mar 2015 00:00:00 GMT; path=${this.path}`;
		document.cookie = `${this.name}-path=${this.path}; expires=Fri, 13 Mar 2015 00:00:00 GMT; path=${this.path}`;
	}
};

export default Cookie;
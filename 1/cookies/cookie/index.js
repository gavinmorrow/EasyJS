// EasyJS Cookies

class Cookie {
	static cookies = {};
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
	}
	delete () {
		document.cookie = `${this.name}=${this.txt}; expires=Fri, 13 Mar 2015 00:00:00 GMT; path=${this.path}`;
	}
};

export default Cookie;
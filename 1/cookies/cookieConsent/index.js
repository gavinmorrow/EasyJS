// EasyJS Cookies

import colorScheme from "/EasyJS/1/ui/colorScheme/index.js";
const elemStyle = document.createElement("link");
elemStyle.rel = "stylesheet";
elemStyle.href = "https://gavinmorrow.github.io/EasyJS/1/cookies/cookieConsent/style.css";
document.head.appendChild(elemStyle);
const cookieConsent = (txt = "By continuting to use this site, you consent to our use of cookies.") => {
	try {
		const close = document.createElement("button");
		close.innerHTML = "Ok";
		close.id = "easyjs-cookie-consent-button";
		close.classList.add("easyjs-cookie-consent-elem");

		const elem = document.createElement("div");
		elem.innerHTML = txt;
		elem.id = "easyjs-cookie-consent";
		elem.classList.add("easyjs-cookie-consent-elem");
		elem.appendChild(close);

		document.body.appendChild(elem);

		return true;
	}catch(e) {
		console.error(e);
		return false;
	}
}

export default cookieConsent;
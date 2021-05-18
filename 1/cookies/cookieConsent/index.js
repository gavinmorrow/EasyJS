// EasyJS Cookies

import Cookie from "../cookie/index.js";
const elemStyle = document.createElement("link");
elemStyle.rel = "stylesheet";
elemStyle.href = "https://gavinmorrow.github.io/EasyJS/1/cookies/cookieConsent/style.css";
document.head.appendChild(elemStyle);
const cookieConsent = (txt = "By continuting to use this site, you consent to our use of cookies.") => {
	new Cookie("easyjs-cookie-consent", "0");
	if (Cookie.cookies["easyjs-cookie-consent"].value !== "1") {
		try {
			const elem = document.createElement("div");
			const close = document.createElement("button");
	
			elem.innerHTML = txt;
			elem.id = "easyjs-cookie-consent";
			elem.classList.add("easyjs-cookie-consent-elem");
			elem.appendChild(close);
	
			close.innerHTML = "Ok";
			close.id = "easyjs-cookie-consent-button";
			close.classList.add("easyjs-cookie-consent-elem");
			close.addEventListener("click", () => {
				new Cookie("easyjs-cookie-consent", "1");
	
				elem.style.opacity = "0";
				setTimeout(() => elem.remove(), 1000)
			});
	
			document.body.appendChild(elem);
	
			return true;
		}catch(e) {
			console.error(e);
			return false;
		}
	}
}

export default cookieConsent;
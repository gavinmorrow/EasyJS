// EasyJS Cookies

const elemStyle = document.createElement("link");
elemStyle.rel = "stylesheet";
elemStyle.href = "https://gavinmorrow.github.io/EasyJS/1/cookies/cookieConsent/style.css";
const cookieConsent = (txt = "By continuting to use this site, you consent to our use of cookies.") => {
	const elem = document.createElement("div");
	elem.innerHTML = txt;

	const close = document.createElement("button");
	close.innerHTML = "Ok";
}
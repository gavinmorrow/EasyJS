// EasyJS UI

const popupStyle = document.createElement("link");
popupStyle.rel = "stylesheet";
popupStyle.href = "https://gavinmrorow.github.io/EasyJS/1/ui/popup/style.css";
document.head.appendChild(popupStyle);

class Popup {
	constructor (txt, ms = 5000) {
		this.txt = txt;
		this.ms = ms;

		this.popup = document.createElement("div");
		this.popup.classList.add("easyjs-popup");
		this.popup.innerHTML = this.txt;

		this.wrapper = document.createElement("div");
		this.wrapper.classList.add("easyjs-popup-wrapper");
	}
	show (ms = this.ms) {
		this.wrapper.style.zIndex = "1000";
		this.wrapper.style.opacity = "1";
		setTimeout(() => {
			this.wrapper.style.opacity = "0";
			setTimeout(() => {
				this.wrapper.zIndex = "-1000";
			}, 1000);
		}, ms);
	}
}
// EasyJS UI

const popupStyle = document.createElement("link");
popupStyle.rel = "stylesheet";
popupStyle.href = "https://gavinmorrow.github.io/EasyJS/1/ui/popup/style.css";
document.head.appendChild(popupStyle);

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

class Popup {
	constructor (txt, ms = 5000, del = false, id = "") {
		this.txt = txt;
		this.ms = ms;
		this.delete = del;
		this.id = id;

		this.popup = document.createElement("div");
		this.popup.classList.add("easyjs-popup");
		this.popup.innerHTML = this.txt;
		this.popup.id = this.id;

		this.wrapper = document.createElement("div");
		this.wrapper.classList.add("easyjs-popup-wrapper");
		this.wrapper.style.zIndex = "-1000";
		this.wrapper.style.opacity = "0";

		this.wrapper.appendChild(this.popup);
		document.body.appendChild(this.wrapper);
	}
	show (ms = this.ms, del) {
		return new Promise(async resolve => {
			this.wrapper.style.zIndex = "100000000000000000000000000000";
			this.wrapper.style.opacity = "1";
			await sleep(1000 + ms);
			this.hide(del);
			resolve(true);
		});
	}
	hide (del = this.delete) {
		return new Promise(async resolve => {
			this.wrapper.style.opacity = "0";
			await sleep(1000);
			this.wrapper.style.zIndex = "-1000";
			if (del) this.remove();
			resolve(true);
		})
	}
	remove () {
		return this.wrapper.remove();
	}
}

export default Popup;
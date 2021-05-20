// EasyJS UI

const popupStyle = document.createElement("link");
popupStyle.rel = "stylesheet";
popupStyle.href = "https://gavinmorrow.github.io/EasyJS/1/ui/popup/style.css";
document.head.appendChild(popupStyle);

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

class Popup {
	constructor (txt, ms = 5000, del = false) {
		this.txt = txt;
		this.ms = ms;
		this.delete = del;

		this.popup = document.createElement("div");
		this.popup.classList.add("easyjs-popup");
		this.popup.innerHTML = this.txt;

		this.wrapper = document.createElement("div");
		this.wrapper.classList.add("easyjs-popup-wrapper");
		this.wrapper.style.zIndex = "-1000";
		this.wrapper.style.opacity = "0";

		this.wrapper.appendChild(this.popup);
		document.body.appendChild(this.wrapper);
	}
	async show (ms = this.ms, del) {
		this.wrapper.style.zIndex = "1000";
		this.wrapper.style.opacity = "1";
		await sleep(1000);
		setTimeout(this.hide.bind(this, del), ms);
		return true;
	}
	async hide (del = this.delete) {
		this.wrapper.style.opacity = "0";
		await sleep(1000);
		this.wrapper.style.zIndex = "-1000";
		if (del) this.remove();
		return true;
	}
	remove () {
		return this.wrapper.remove();
	}
}

export default Popup;
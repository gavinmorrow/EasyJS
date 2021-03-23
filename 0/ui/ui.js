// © 2021 Gavin Morrow
// EasyJS UI

const ui = {
	center: element => {
		// Centers on full screen, must have a position of fixed, absolute, or relative.
		element.style.top = (innerHeight - element.offsetHeight) / 2;
		element.style.left = (innerWidth - element.offsetWidth) / 2;
		return element;
	},
};

export default ui;
// © 2021 Gavin Morrow
// EasyJS UI

let bg = "";
let navBg = "";
let cardBg = "";
let buttonBg = "";
let divideBg = "";
let text = "";
let subText = "";

export default {
	set: light => localStorage.colorScheme = light ? "1" : "",
	reset: () => localStorage.colorScheme = matchMedia("prefers-color-scheme: light") ? "1" : "",
	setColors: (colors) => {
		bg = colors.bg || bg;
		navBg = colors.navBg || navBg;
		cardBg = colors.cardBg || cardBg;
		buttonBg = colors.buttonBg || buttonBg;
		divideBg = colors.divideBg || divideBg;
		text = colors.text || text;
		subText = colors.subText || subText;

		return {
			bg,
			navBg,
			cardBg,
			buttonBg,
			divideBg,
			text,
			subText,
		};
	},
	getColors: () => ({
		bg,
		navBg,
		cardBg,
		buttonBg,
		divideBg,
		text,
		subText,
	}),
};
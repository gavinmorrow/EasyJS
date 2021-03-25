// © 2021 Gavin Morrow
// EasyJS UI

export default {
	set: light => localStorage.colorScheme = light ? "1" : "",
	reset: () => localStorage.colorScheme = matchMedia("prefers-color-scheme: light") ? "1" : "",
	setColors: (bg, navBg, cardBg, buttonBg, divideBg, text, subText) => {

	},
};
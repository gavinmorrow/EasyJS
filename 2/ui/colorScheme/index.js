// © 2021 Gavin Morrow
// EasyJS UI

const lightColors = {
	bg: "#ffffff",
	navBg: "#fefffe",
	contrastNavBg: "#555855",
	cardBg: "#efeeef",
	buttonBg: "#e0e1e0",
	divideBg: "#2c2c2c",
	alertBg: "#ffff00",

	text: "#131012",
	subText: "#535353",
	link: "#0000ff",
}
const darkColors = {
	bg: "#111111",
	navBg: "#181818",
	contrastNavBg: "#858885",
	cardBg: "#303130",
	buttonBg: "#383938",
	divideBg: "#d3d3d3",
	alertBg: "#aaaa00",

	text: "#ecefed",
	subText: "#acacac",
	link: "#adddad",
}

const colorScheme = window.colorScheme || {
	set: function (light) {
		localStorage.colorScheme = (light ? "1" : "");
		this.setColors();
	},
	reset: function () {
		localStorage.colorScheme = (matchMedia("(prefers-color-scheme: light)").matches ? "1" : "");
		this.setColors();
	},
	setColors: (light = lightColors, dark = darkColors) => {
		const colors = [];
		for (const color in lightColors) {
			if (darkColors[color]) colors.push(color);
		}

		const setVar = (name, value) => document.documentElement.style.setProperty(`--easyjs-${name}`, `${value}`);
		const htr = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16)).join(", ");
		for (const color of colors) {
			lightColors[color] = light[color] || lightColors[color];
			darkColors[color] = dark[color] || darkColors[color];

			setVar(`dark-${color}`, darkColors[color]);
			setVar(`light-${color}`, lightColors[color]);

			setVar(`rgb-dark-${color}`, htr(darkColors[color]));
			setVar(`rgb-light-${color}`, htr(lightColors[color]));
			switch (localStorage.colorScheme) {
				case "1":
					setVar(color, lightColors[color]);
					setVar(`inverse-${color}`, darkColors[color]);

					setVar(`rgb-${color}`, htr(lightColors[color]));
					setVar(`rgb-inverse-${color}`, htr(darkColors[color]));
					break;
				case "":
					setVar(color, darkColors[color]);
					setVar(`inverse-${color}`, lightColors[color]);

					setVar(`rgb-${color}`, htr(darkColors[color]));
					setVar(`rgb-inverse-${color}`, htr(lightColors[color]));
					break;
				default:
					throw new Error(`EasyJS UI Color Scheme colorScheme property is invalid. \n\nValue: "${localStorage.colorScheme}"`);
			}
		}
		
		return colorScheme.colors;
	},
	get colors () {
		return {
			light: lightColors,
			dark: darkColors,
		};
	},
	autoChange: true,

	get scheme () {
		return localStorage.colorScheme == "1" ? "light" : "dark";
	},
	get light () {
		return this.scheme == "light";
	},
	get dark () {
		return this.scheme == "dark";
	},
};

const update = () => {
	if (colorScheme.autoChange) colorScheme.reset();
	colorScheme.setColors();
};
update();
addEventListener("cs", update);
matchMedia("(prefers-color-scheme: light)").addEventListener("change", update);
export default colorScheme;
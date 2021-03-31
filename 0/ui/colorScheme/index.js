// © 2021 Gavin Morrow
// EasyJS UI

const lightColors = {
	bg: "#ffffff",
	navBg: "#fefffe",
	cardBg: "#efeeef",
	buttonBg: "#e0e1e0",
	divideBg: "#2c2c2c",

	text: "#131012",
	subText: "#535353",
	link: "#0000ff",
}
const darkColors = {
	bg: "#111111",
	navBg: "#181818",
	cardBg: "#303130",
	buttonBg: "#383938",
	divideBg: "#d3d3d3",

	text: "#ecefed",
	subText: "#acacac",
	link: "#adddad",
}

const colorScheme = {
	set: light => localStorage.colorScheme = light ? "1" : "",
	reset: () => localStorage.colorScheme = matchMedia("(prefers-color-scheme: light)").matches ? "1" : "",
	setColors: (light = lightColors, dark = darkColors) => {
		const colors = [];
		for (const color in lightColors) {
			if (darkColors[color]) colors.push(color);
		}

		const setVar = (name, value) => document.documentElement.style.setProperty(`--easyjs-${name}`, `${value}`);
		for (const color of colors) {
			lightColors[color] = light[color] || lightColors[color];
			darkColors[color] = dark[color] || darkColors[color];

			switch (localStorage.colorScheme) {
				case "1":
					setVar(color, lightColors[color]);
					break;
				case "":
					setVar(color, darkColors[color]);
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
};

const update = () => {
	if (colorScheme.autoChange)
		colorScheme.reset();
	colorScheme.setColors();
};
update();
matchMedia("(prefers-color-scheme: light)").addEventListener("change", update);

export default colorScheme;
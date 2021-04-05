import colorScheme from "../0/ui/colorScheme/index.js";
import EasyJSVersion from "../main.js";

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const title = document.getElementById("title");

const realign = () => main.style.width = `${innerWidth - nav.offsetWidth}px`;
const titleBoxShadowSet = () => {
	if (main.scrollTop > 0)
		title.style.boxShadow = "0 0 1vmin 0 var(--easyjs-text)";
	else
		title.style.boxShadow = "0 0 0.25vmin 0 var(--easyjs-text)";
};
const pxToNum = px => Number(px.split("px")[0]);

realign();
addEventListener("resize", realign);

titleBoxShadowSet();
main.addEventListener("scroll", titleBoxShadowSet);

main.style.paddingTop = `${pxToNum(getComputedStyle(title).fontSize) + pxToNum(getComputedStyle(title).paddingTop) + pxToNum(getComputedStyle(title).paddingBottom)}px`;

(async () => {
	const EasyJS = await EasyJSVersion();
	const canvas = document.getElementById("canvas");
	// console.log(EasyJS);
	const graph = new EasyJS.canvas.lineGraph.LineGraph(canvas, 0, canvas.height, [{x: canvas.width/2, y: 0}, {x: canvas.width, y: canvas.height}]);

	setTimeout(() => graph.removePoint(canvas.width/2, 0), 1000);
})();
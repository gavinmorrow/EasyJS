import colorScheme from "../0/ui/colorScheme/index.js";

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const title = document.getElementById("title");
const realign = () => main.style.width = `${innerWidth - nav.offsetWidth}px`;
realign();
addEventListener("resize", realign);


const titleBoxShadowSet = () => {
	if (main.scrollTop > 0)
		title.style.boxShadow = "0 0 1vmin 0 var(--easyjs-text)";
	else
		title.style.boxShadow = "0 0 0.25vmin 0 var(--easyjs-text)";
};
titleBoxShadowSet();
main.addEventListener("scroll", titleBoxShadowSet);
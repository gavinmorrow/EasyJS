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

	const observeSection = (target, name = target.id) => {
		const thresholdBase = innerHeight / Math.max(target.offsetHeight, innerHeight);

		const observer = new IntersectionObserver((entries, observer) => {
			console.log(entries, name);
			document.getElementById("title-inner").textContent = name;
		}, {
			root: document.getElementById("main").querySelector("div"),
			threshold: [thresholdBase*0,thresholdBase*0.1,thresholdBase*0.25,thresholdBase*0.5,thresholdBase*0.75,thresholdBase*1,],
		});

		observer.observe(target);
	}

	for (const section of document.querySelectorAll(".section")) {
		observeSection(section, section.id);
	}
})();
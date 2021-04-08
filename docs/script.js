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

	const scrollUpdate = () => {
		for (const section of document.querySelectorAll(".section")) {
			if (section.getBoundingClientRect().top > 0) {
				if (section.getBoundingClientRect().top <= title.offsetHeight / 2) {
					// Section is underneath the title
					document.getElementById("title-inner").textContent = section.id;
					document.querySelector(`.nav-a[href*="${section.id}"]`).classList.add("here");
				} else if (section.getBoundingClientRect().top > title.offsetHeight / 2) {
					if (section == main.querySelector("div").firstElementChild) {
						document.getElementById("title-inner").textContent = "";
						document.querySelector(`.nav-a:first-of-type`).classList.add("here");
					}
				}
			}
		}
	};
	scrollUpdate();
	main.addEventListener("scroll", scrollUpdate);

	for (const a of document.querySelectorAll(".nav-a")) {
		a.addEventListener("click", () => {
			scrollUpdate();
			// a.blur();
		})
	}
})();
import EasyJSVersion from "../main.js";

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const title = document.getElementById("title");
const closeNav = document.getElementById("close");

const realign = () => main.style.width = `calc(${innerWidth}px - ${nav.offsetWidth}px)`;
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
	const EasyJS = await EasyJSVersion(1);

	const scrollUpdate = () => {
		document.querySelector(`.nav-a:not(#close):first-of-type`).classList.remove("here");
		for (const section of document.querySelectorAll(".section")) {
			document.querySelector(`.nav-a[href*="${section.id}"]`).classList.remove("here");
			if (section.getBoundingClientRect().bottom > 0) {
				// In viewport
				if (section.getBoundingClientRect().top <= title.offsetHeight / 2) {
					// Section is underneath the title
					document.getElementById("title-inner").textContent = section.id;
					document.querySelector(`.nav-a[href*="${section.id}"]`).classList.add("here");
					document.getElementById("title-inner").style.textTransform = section.getAttribute("data-text-transform") || "capitalize";
				} else {
					if (section == document.getElementById("main-inner").firstElementChild) {
						// Nothing is in the range, go to the overview. 
						document.getElementById("title-inner").textContent = "";
						document.querySelector(`.nav-a:not(#close):first-of-type`).classList.add("here");
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
			a.blur();
		});
	}

	for (const linkable of document.querySelectorAll(".linkable")) {
		const linkableLink = document.createElement("a");
		linkableLink.textContent = "¶";
		linkableLink.classList.add("linkable-link");
		linkableLink.href = `#${linkable.id || ""}`;
		linkable.appendChild(linkableLink);

		const showLink = () => linkableLink.style.opacity = "1"
		const hideLink = () => linkableLink.style.opacity = "0";

		linkable.addEventListener("mouseenter", showLink);
		linkable.addEventListener("focus", showLink);

		linkable.addEventListener("mouseleave", hideLink);
		linkable.addEventListener("blur", hideLink);

		hideLink();
	}

	closeNav.addEventListener("click", () => {
		if (nav.getAttribute("data-closed") !== "") {
			nav.setAttribute("data-closed", "");
			console.log(nav.style.left = `calc(0px - ${nav.offsetWidth}px + ${closeNav.offsetWidth}px + ${getComputedStyle(closeNav).padding} * 2 + ${getComputedStyle(nav).padding})`);
		}else {
			nav.removeAttribute("data-closed");
			nav.style.left = ``;
		}
		realign();
	});
})();
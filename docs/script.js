import colorScheme from "../0/ui/colorScheme/index.js";

const main = document.getElementById("main");
const nav = document.getElementById("nav");
main.style.width = `${innerWidth - nav.offsetWidth}px`;
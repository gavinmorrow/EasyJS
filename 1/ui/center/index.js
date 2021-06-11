// © 2021 Gavin Morrow
// EasyJS UI

export default element => {
	// Centers on full screen, must have a position of fixed, absolute, or relative.
	element.style.top = `${(innerHeight - element.offsetHeight) / 2}px`;
	element.style.left = `${(innerWidth - element.offsetWidth) / 2}px`;
	return element;
};
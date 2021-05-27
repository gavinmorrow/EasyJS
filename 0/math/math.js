// © 2021 Gavin Morrow
// EasyJS Math

const math = {
	// Min: Inclusive
	// Max: Exclusive
	random: (min, max, places = 10) => Math.floor((Math.random()*(max-min)+min)*10**places)/10**places,
	clamp: (min, prefered, max) => Math.max(min, Math.min(prefered, max)),
};

export default math;
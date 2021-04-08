// EasyJS Math

// Min: Inclusive
// Max: Exclusive
const random = (min, max, places = 10) => Math.floor((Math.random()*(max-min)+min)*10**places)/10**places;
export default random;
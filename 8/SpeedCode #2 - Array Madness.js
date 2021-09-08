function arrayMadness(a, b) {
return Math.floor(a.map(e => Math.pow(e,2)).reduce((tot, i) => tot + i)) > Math.floor(b.map(e => Math.pow(e,3)).reduce((tot, i) => tot + i));
}

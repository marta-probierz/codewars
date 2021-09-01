function parseF(s) {
  return typeof s === 'boolean' || typeof s === 'undefined' || isNaN(Number(s)) ? null : Number(s);
}

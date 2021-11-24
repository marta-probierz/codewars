function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  return '#' + r + g + b;
}

// or
const hex = integer => `${integer < 16 ? '0' : ''}${integer.toString(16)}`;
const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`;

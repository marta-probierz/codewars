function highestValue(a, b) {
  let sumA = 0;
  let sumB = 0;
  a.split('').forEach(e => {
    sumA+=e.charCodeAt();
  });
  b.split('').forEach(e => {
    sumB+=e.charCodeAt();
  });
  return sumA === sumB ? a : sumA > sumB ? a : b;
}

// shorter 
function highestValue(a, b) {
  return [...a].reduce((c, d) => c + d.charCodeAt(), 0) >= [...b].reduce((c, d) => c + d.charCodeAt(), 0) ? a : b
}

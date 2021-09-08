function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

// or
function findNeedle(haystack) {
  let res = 0;
  haystack.forEach((e, i) => {
    if (e === 'needle') {
      res+=i;
    }
  });
  return `found the needle at position ${res}`;
}

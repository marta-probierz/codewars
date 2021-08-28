function accum(s) {
	let result = [];
  let count = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    count++;
    for (let x = 0; x < count; x++) {
      if (x === 0) {
        result.push(s[i].toUpperCase());
      } else {
        result.push(s[i]);
      }
    }
    if (i != s.length - 1) {
      result.push('-');
    }
  }
  return result.join('');
}

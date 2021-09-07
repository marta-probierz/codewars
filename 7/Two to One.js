function longest(s1, s2) {
  let arr = (s1+s2).split('').sort();
  return [...new Set(arr)].join('');
}

function longest(s1, s2) {
  let arr = (s1+s2).split('').sort();
  return [...new Set(arr)].join('');
}

// shorter
function longest(s1, s2) {
  return [...new Set((s1+s2).split('').sort())].join('');
}

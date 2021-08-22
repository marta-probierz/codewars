function vaporcode(string) {
  let res = '';
  let str = string.toUpperCase().split('').forEach(e => {
    if (e !== ' ') {
      res+=e;
    }
  });
  return res.split('').join('  ');
}

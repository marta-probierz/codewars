function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(e => {
    if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u') {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

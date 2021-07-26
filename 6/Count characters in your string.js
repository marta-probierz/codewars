function count (string) {  
  let count = {};
  string.split('').forEach(function(e) {
    if (count[e]) {
      count[e]++;
    } else {
      count[e] = 1
    }
  })
  return count;
}

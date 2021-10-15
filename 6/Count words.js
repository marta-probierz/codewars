function wordCount(s) {
  let sum = 0;
  let arr = s.toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\b(as|the|on|at|of|upon|in|a)\b/g, '').split(' ');  
  arr.forEach(e => {
    if (e !== '') {
      sum++;
    } 
  });
  return sum;
}

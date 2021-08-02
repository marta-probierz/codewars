function well(x){
  let good = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      good++;
    }
  }
  if (good === 0) return 'Fail!';
  if (good > 0 && good <= 2) return 'Publish!';
  if (good > 2) return 'I smell a series!'
}

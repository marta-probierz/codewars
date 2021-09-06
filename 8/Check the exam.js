function checkExam(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result+=4;
    else if (b[i] === '') result+=0;
    else result-=1;
  }
  return result < 0 ? 0 : result;
}

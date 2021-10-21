function solution(number){
  if (number <= 0 || number === undefined) {
    return 0;
  } else {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  let setter = [...new Set(arr)];
  return setter.reduce((tot, i) => tot + i);
  }
}

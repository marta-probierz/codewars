function sumOfIntegersInString(s){
  let num = s.replace(/[^0-9]/g, " ");
  let arr = num.split(' ');
  let rem = arr.filter(function (el) {
  return el !== '';
});
  if (rem.length === 0) {
   return 0;
  } else {
   return eval(rem.join('+'));
  }
}

function sumOfIntegersInString(s){
  let num = s.replace(/[^0-9]/g, " ").split(' ').filter(function (el) {
  return el !== '';
});
  return num.length === 0 ? 0 : eval(num.join('+'));
}

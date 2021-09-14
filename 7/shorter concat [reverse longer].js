function shorter_reverse_longer(a,b){
  return a.length < b.length ? a + b.split('').reverse().join('') + a : b + a.split('').reverse().join('') + b;
}

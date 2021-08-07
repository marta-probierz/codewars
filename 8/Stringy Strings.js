function stringy(size) {
  let str = '';
  for (var i = 1; i <= size; i++) {
    str = str + i%2  
  }
  return str; 
}

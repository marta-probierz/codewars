function add(a) {
  return function(b) {
    return a+b;
  }
}

// one line
const add = a => b => a+b;

function remove(s,n){
  let input = s;
  while (n) {
  input = input.replace(/!/, "");
  n-=1;
  }
  return input;
}

// one line
const remove = (s, n) => s.replace(/!/g, e => n-- > 0 ? `` : e);

function hypotenuse(a, b){
  return Math.sqrt(a*a + b*b);
}

function leg(c, a){
  return Math.sqrt(c*c - a*a);
}

// shorter
const hypotenuse = (a,b) => Math.sqrt(a*a + b*b);
const leg = (c,a) => Math.sqrt(c*c - a*a);

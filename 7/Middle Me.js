function middleMe(N, X, Y){
  return N % 2 ? X : Y.repeat(N/2)+X+Y.repeat(N/2);
}

// second solution
function middleMe(N, X, Y){
  return N % 2 === 0 ? Y.repeat(N/2)+X+Y.repeat(N/2) : X;
}

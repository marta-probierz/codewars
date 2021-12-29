function roundIt (n) {
    let [left, right] = n.toString().split('.').map(x => x.length),
        dx = left - right,
        fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round
    return fn(n)
}

// or
function roundIt(n){
  var [a, b] = n.toString().split('.');
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}

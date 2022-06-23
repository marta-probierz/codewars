const remove = (a) => (a[a.length-1] === '!') ? a.slice(a, -1) : a;

// or
const remove2 = (a) => a.replace( /!$/, '')
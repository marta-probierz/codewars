function helpJesse(array){
  let arr = [];
  array.map(v=>arr.push(`Pour ${v.amount} mL of ${v.solution} into a ${v.instrument}${v.note?` (${v.note})`:''}`))
  return arr
}

// or
function helpJesse(array){
  return array.map(a => "Pour " + a.amount + " mL of " + a.solution + " into a " + a.instrument + (a.hasOwnProperty("note") ? (" ("+a.note+")") : ""));
}

function helpJesse(array){
  let arr = [];
  array.map(v=>arr.push(`Pour ${v.amount} mL of ${v.solution} into a ${v.instrument}${v.note?` (${v.note})`:''}`))
  return arr
}

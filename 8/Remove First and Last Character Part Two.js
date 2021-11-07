function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}

// shorter
const array = array_ => array_.split(',').slice(1, -1).join(' ') || null

// or
const array = str => {
  var arr = str.split(",");
  return arr.length > 2 ? arr.slice(1,-1).join(" ") : null;
}

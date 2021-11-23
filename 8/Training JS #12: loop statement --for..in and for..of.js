const giveMeFive = object => {
  let res = []
  for (let key in object) {
      if (key.length === 5) res.push(key)
      if (object[key].length === 5) res.push(object[key]) 
  }
  return res;
}

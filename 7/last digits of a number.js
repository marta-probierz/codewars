function lastDigit(n, d) {
  let arr = String(n).split('').reverse();
    let remove = arr.slice(0,d);
    let res = remove.reverse();
    if (d <= 0) {
      return [];
    } else {
    let tot = [];
    res.forEach(e => {
      tot.push(Number(e));
    })
    return tot;
    }
}

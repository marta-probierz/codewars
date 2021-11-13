function countSmileys(arr) {
    return arr.filter(e => e === ':)' || e === ';)' || e === ':-)' || e === ';-)' || e === ':~)' || e === ';~)' || e === ':D' || e === ';D' || e === ':-D' || e === ';-D' || e === ':~D' || e === ';~D').length;
}

// smarter
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// one line
const countSmileys = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;

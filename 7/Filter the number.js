var FilterString = function(value) {
  return parseInt(value.replace(/[a-z]/gi,''));
}

// one line
var FilterString = value => parseInt(value.replace(/[a-z]/gi,''))

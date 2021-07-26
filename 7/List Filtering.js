let result = (el) => {
  if (typeof(el) !== 'string') {
    return true;
  }
}

function filter_list(l) {
  return l.filter(result);
}

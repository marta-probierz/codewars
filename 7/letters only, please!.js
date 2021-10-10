function removeChars(s) {
  return s.replace(/[^a-z\s]/gi, '');
}

// the same

function removeChars(s) {
  return s.replace(/[^\sa-z]/gi, '');
}

// or
function removeChars(s) {
  return s.replace(/[^a-z ]/ig, '');
}

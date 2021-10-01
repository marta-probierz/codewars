function isPalindrome(line) {
  let s = String(line);
  return s === s.split('').reverse().join('');
}

// shorter
function isPalindrome(line) {
  return String(line) === String(line).split('').reverse().join('');
}

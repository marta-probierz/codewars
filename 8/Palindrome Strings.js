function isPalindrome(line) {
  let s = String(line);
  return s === s.split('').reverse().join('');
}

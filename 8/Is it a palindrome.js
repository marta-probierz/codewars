function isPalindrome(x) {
  let res = [];
  for (let i = x.length - 1; i >= 0; i--) {
    res.push(x[i]);
  }
  let result = res.join('');
  if (x.toLowerCase() === result.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

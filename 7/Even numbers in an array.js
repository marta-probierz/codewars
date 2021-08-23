function evenNumbers(array, number) {
  let even = [];
  array.forEach(e => {
    if (e % 2 === 0) {
      even.push(e);
    }
  });
  return even.slice(-number);
}

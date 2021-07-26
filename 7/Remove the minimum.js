function removeSmallest(numbers) {
  const newNumbers = [...numbers];
  let x = Math.min.apply(null, newNumbers);
  let i = newNumbers.indexOf(x);
  newNumbers.splice(i, 1)
  return newNumbers;
}

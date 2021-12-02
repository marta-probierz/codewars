const shuffleIt = (array, ...swaps) => {
  const newArray = [...array]

  swaps.forEach(([firstIndex, secondIndex]) => {
    const [firstNumber, secondNumber] = [newArray[firstIndex], newArray[secondIndex]]
    ;[newArray[firstIndex], newArray[secondIndex]] = [secondNumber, firstNumber]
  })

  return newArray
}

// or
var shuffleIt=(arr,...ex) => {
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]]
  return arr
}

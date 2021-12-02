const shuffleIt = (array, ...swaps) => {
  const newArray = [...array]

  swaps.forEach(([firstIndex, secondIndex]) => {
    const [firstNumber, secondNumber] = [newArray[firstIndex], newArray[secondIndex]]
    ;[newArray[firstIndex], newArray[secondIndex]] = [secondNumber, firstNumber]
  })

  return newArray
}

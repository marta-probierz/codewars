const sortByValueAndIndex = array =>
  array
    .map((value, index) => ({ value, index: index + 1 }))
    .sort((a, b) => a.value * a.index - b.value * b.index)
    .map(({ value }) => value)
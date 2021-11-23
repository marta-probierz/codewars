const grabDoll = dolls => {
  const bag = []

  for (const element of dolls) {
    if (element === 'Hello Kitty' || element === 'Barbie doll') {
      bag.push(element)
    } else continue

    if (bag.length >= 3) break
  }

  return bag
}

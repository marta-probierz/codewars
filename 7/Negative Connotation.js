// not clever

function connotation(str) {
  let firstCount = 0;
  let secondCount = 0;
  let arr = str.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a' || arr[i][0] === 'b' || arr[i][0] === 'c' || arr[i][0] === 'd' || arr[i][0] === 'e' || arr[i][0] === 'f' || arr[i][0] === 'g' || arr[i][0] === 'h' || arr[i][0] === 'i' || arr[i][0] === 'j' || arr[i][0] === 'k' || arr[i][0] === 'l' || arr[i][0] === 'm') {
      firstCount++;
    } else if (arr[i][0] === 'n' || arr[i][0] === 'o' || arr[i][0] === 'p' || arr[i][0] === 'q' || arr[i][0] === 'r' || arr[i][0] === 's' || arr[i][0] === 't' || arr[i][0] === 'u' || arr[i][0] === 'v' || arr[i][0] === 'w' || arr[i][0] === 'x' || arr[i][0] === 'y' || arr[i][0] === 'z') {
      secondCount++;
    }
  }
  return firstCount >= secondCount;
}


// more clever

function connotation(str) {
  let firstCount = 0;
  let secondCount = 0;
  str.toLowerCase().split(' ').forEach(el => {
    if (el.charAt(0).match(/[a-m]/)) firstCount++;
    if (el.charAt(0).match(/[n-z]/)) secondCount++;
  });
  return firstCount >= secondCount;
}

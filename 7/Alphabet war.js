function alphabetWar(fight) {
  let right = 0;
  let left = 0;
  for (let e = 0; e < fight.length; e++) {
    if (fight[e] === 'w') left += 4;
    if (fight[e] === 'p') left += 3;
    if (fight[e] === 'b') left += 2;
    if (fight[e] === 's') left += 1;
    if (fight[e] === 'm') right += 4;
    if (fight[e] === 'q') right += 3;
    if (fight[e] === 'd') right += 2;
    if (fight[e] === 'z') right += 1;
  }
    if (right > left) {
      return 'Right side wins!';
    } else if (left > right) {
      return 'Left side wins!';
    } else {
      return `Let's fight again!`;
    }
}

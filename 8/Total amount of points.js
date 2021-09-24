function points(games) {
  let totalPoints = 0;
  for (let game of games) {
    let [scoreA, scoreB] = game.split(":");
    let points = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0;
    totalPoints += points;
  }
  return totalPoints;
}

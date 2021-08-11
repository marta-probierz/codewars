function pointsPer48(ppg, mpg) {
  if (ppg == 0 || mpg == 0) return 0;
  return Number((ppg * 48 / mpg).toFixed(1));
}

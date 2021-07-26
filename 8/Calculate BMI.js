function bmi(weight, height) {
  let total = weight / Math.pow(height, 2);
  if (total <= 18.5) return "Underweight";
  if (total <= 25.0) return "Normal";
  if (total <= 30.0) return "Overweight";
  if (total > 30) return "Obese";
}

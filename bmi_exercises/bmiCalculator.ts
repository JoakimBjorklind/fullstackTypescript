const calculateBmi = (height: number, weight: number) : string => {
  const bmi = weight / Math.pow(height / 100, 2);
  // numbers and labels taken from wikipedia page!
  if (bmi <= 15) {
      return 'Very severely underweight';
  } else if (15 < bmi && bmi <= 16) {
      return 'Severely underweight';
  } else if (16 < bmi && bmi <= 18.5) {
      return 'Underweight';
  } else if (18.5 < bmi && bmi <= 25) {
      return 'Normal (healthy weight)';
  } else if (25 < bmi && bmi <= 30) {
      return 'Overweight';
  } else if (30 < bmi && bmi <= 35) {
      return 'Obese Class I (Moderately obese)';
  } else if (35 < bmi && bmi <= 40) {
      return 'Obese Class II (Severely obese)';
  } else {
      return 'Obese Class III (Very severely obese)';
  }
 
}

console.log(calculateBmi(180, 74));
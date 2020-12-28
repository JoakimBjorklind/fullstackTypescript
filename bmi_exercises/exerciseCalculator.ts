interface TrainingResult {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (exerciseHours: Array<number>, target: number): TrainingResult => {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(hours => hours > 0).length;
    const average = exerciseHours.reduce((total, hours) => total + hours, 0) / exerciseHours.length;
    const success = average >= target;
    const percentage = average / target;
    let rating = 1;
    let ratingDescription = '';

    if (percentage >= 1) {
        rating = 3;
        ratingDescription = 'Your target was reached!';
      } else if (percentage >= 0.8 && percentage < 1) {
        rating = 2;
        ratingDescription = 'Your target was almost reached!';
      } else {
        rating = 1;
        ratingDescription = 'You need to work harder to reach your target!';
      }

      return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
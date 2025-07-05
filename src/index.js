import readLineSync from 'readline-sync';

const playBrainGame = (description, task, min, max) => {
  let playerAnswer;
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');

  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  while (correctAnswersCount < 3) {
    const generatedTask = task.generated(min, max);
    console.log(`Question: ${generatedTask}`);
    playerAnswer = readLineSync.question('Your answer: ');

    const correctAnswer = task.correctAnswer(generatedTask);
    if (playerAnswer === String(correctAnswer)) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default playBrainGame;

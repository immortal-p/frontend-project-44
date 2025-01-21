import readLineSync from 'readline-sync';

const playBrainGame = (gameDescription, generateTask, minValue, maxValue, calculateCorrectAnswer) => {
  let playerAnswer;
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');

  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameDescription);

  while (correctAnswersCount < 3) {
    const generatedTask = generateTask(minValue, maxValue);
    console.log(`Question: ${generatedTask}`);
    userAnswer = readLineSync.question('Your answer: ');

    const correctAnswer = calculateCorrectAnswer(generatedTask);
    if (userAnswer === String(correctAnswer)) {
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

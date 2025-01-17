"use strict";

import readLineSync from "readline-sync";

const randomTask = (textQust, randomQust, min, max, currectAns) => {
  let userAnswer;
  let correctCount = 0;
  console.log("Welcome to the Brain Games!");

  const firstName = readLineSync.question("May I have your name? ");
  console.log(`Hello, ${firstName}!`);

  console.log(textQust);

  while (correctCount < 3) {
    let randomQ = randomQust(min, max);
    console.log(`Question: ${randomQ}`);
    userAnswer = readLineSync.question("Your answer: ");

    const currectAnswer = currectAns(randomQ);
    if (userAnswer === String(currectAnswer)) {
      correctCount++;
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'`
      );
      break;
    }
  }

  if (correctCount === 3) {
    console.log(`Congratulations, ${firstName}!`);
  }
};

export { randomTask };
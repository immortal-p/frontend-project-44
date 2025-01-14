#!/usr/bin/env node
"use strict";

import readLineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

const firstName = readLineSync.question("May I have your name? ");
console.log(`Hello, ${firstName}!`);

console.log(`Answer "yes" if the number is even, otherwise answer "no"`);

const honestNum = (firstName) => {
  let randomNum;
  let userAnswer;
  let correctCount = 0;

  while (correctCount < 3) {
    randomNum = Math.floor(Math.random() * 100);

    console.log(`Qustion: ${randomNum}`);
    userAnswer = readLineSync.question("Your answer: ");
    const correctAnswer = randomNum % 2 === 0 ? "yes" : "no";

    if (userAnswer !== "yes" && userAnswer !== "no") {
      console.log("Wrong");
      break;
    }

    if (userAnswer === correctAnswer) {
      correctCount++;
      console.log("Correct!");
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${firstName}!`);
      break;
    }
  }
  if (correctCount === 3) {
    console.log(`Congratulations, ${firstName}!`);
  }
};

honestNum(firstName);

"use strict";

import { randomTask } from "../index.js";

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const correctAnswer = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

const textQust = 'Answer "yes" if the number is even, otherwise answer "no"';

const runBrainEven = () => {
  randomTask(textQust, randomNum, 0, 30, correctAnswer);
};

export default runBrainEven;

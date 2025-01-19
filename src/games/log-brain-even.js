"use strict";

import { randomTask } from "../index.js";
import randomNum from "../random-num.js";

const correctAnswer = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

const textQust = `Answer 'yes' if number even otherwise answer 'no'.`;

const runBrainEven = () => {
  randomTask(textQust, randomNum, 0, 50, correctAnswer);
};

export default runBrainEven;

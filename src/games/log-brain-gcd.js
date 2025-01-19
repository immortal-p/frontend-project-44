"use strict";

import { randomTask } from "../index.js";
import randomNum from "../random-num.js";

const gcd = (paif) => {
  const arrPaif = paif.split(" ");
  let a = arrPaif[0];
  let b = arrPaif[1];
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const randomPaif = (min, max) => {
  const a = randomNum(min, max);
  const b = randomNum(min, max);
  const result = `${a} ${b}`;
  return result;
};

const textQust = "Find the greates common divisor of given numbers.";

const runBrainGcd = () => {
  return randomTask(textQust, randomPaif, 10, 50, gcd);
};

export default runBrainGcd;

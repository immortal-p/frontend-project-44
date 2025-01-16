"use strict";

import { randomTask } from "../index.js";

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomOperat = () => {
  const operators = ["+", "-", "*"];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculator = (example) => {
  const arrExample = example.split(" ");
  const num1 = Number(arrExample[0]);
  const num2 = Number(arrExample[2]);
  const operator = arrExample[1];
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  }
};

const generateExpamle = (min, max) => {
  const num1 = getRandomNum(min, max);
  const num2 = getRandomNum(min, max);
  const operator = getRandomOperat();

  const result = `${num1} ${operator} ${num2}`;
  return result;
};

const textQust = "What is the result of the expression?";

const runBrainCalc = () => {
  randomTask(textQust, generateExpamle, 0, 20, calculator);
};

export default runBrainCalc;

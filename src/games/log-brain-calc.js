import randomNum from '../random-num.js';
import randomTask from '../index.js';

const getRandomOperat = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculator = (example) => {
  const arrExample = example.split(' ');
  const num1 = Number(arrExample[0]);
  const num2 = Number(arrExample[2]);
  const operator = arrExample[1];
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const generateExpamle = (min, max) => {
  const num1 = randomNum(min, max);
  const num2 = randomNum(min, max);
  const operator = getRandomOperat();

  const result = `${num1} ${operator} ${num2}`;
  return result;
};

const textQust = 'What is the result of the expression?';

const runBrainCalc = () => {
  randomTask(textQust, generateExpamle, 0, 20, calculator);
};

export default runBrainCalc;

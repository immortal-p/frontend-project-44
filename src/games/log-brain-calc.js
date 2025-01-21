import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const evaluateExpression = (expression) => {
  const expressionParts = expression.split(' ');
  const num1 = Number(expressionParts[0]);
  const num2 = Number(expressionParts[2]);
  const operator = expressionParts[1];
  let calculatedValue = 0;
  if (operator === '+') {
    calculatedValue = num1 + num2;
  } else if (operator === '-') {
    calculatedValue = num1 - num2;
  } else if (operator === '*') {
    calculatedValue = num1 * num2;
  }
  return calculatedValue;
};

const generateMathTask = (minValue, maxValue) => {
  const num1 = getRandomNum(minValue, maxValue);
  const num2 = getRandomNum(minValue, maxValue);
  const operator = generateRandomOperator();

  const task = `${num1} ${operator} ${num2}`;
  return task;
};

const textQust = 'What is the result of the expression?';

const runBrainCalc = () => {
  randomTask(textQust, generateExpamle, 0, 20, calculator);
};

export default runBrainCalc;

import generateNum from '../random-num.js';
import playBrainGame from '../index.js';

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const correctAnswer = (expression) => {
  const expressionParts = expression.split(' ');
  const numFirst = Number(expressionParts[0]);
  const numSecond = Number(expressionParts[2]);
  const operator = expressionParts[1];
  let calculatedValue = 0;
  switch (operator) {
    case ('+'):
      calculatedValue = numFirst + numSecond;
      break;
    case ('-'):
      calculatedValue = numFirst - numSecond;
      break;
    case ('*'):
      calculatedValue = numFirst * numSecond;
      break;
    default:
      console.log(`Invalid operator: ${operator}`);
  }
  return calculatedValue;
};

const generateTask = (minValue, maxValue) => {
  const numFirst = generateNum(minValue, maxValue);
  const numSecond = generateNum(minValue, maxValue);
  const operator = generateOperator();

  const task = `${numFirst} ${operator} ${numSecond}`;
  return task;
};

const description = 'What is the result of the expression?';
const task = { generateTask, correctAnswer }
const minValue = 0;
const maxValue = 20;

const runBrainCalc = () => {
  playBrainGame(description, task, minValue, maxValue);
};

export default runBrainCalc;

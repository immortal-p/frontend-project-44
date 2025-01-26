import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getCorrectAns = (num) => {
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return expectedAnswer;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 50;

const runBrainEven = () => playBrainGame(description, generateRandomNum, min, max, getCorrectAns);

export default runBrainEven;

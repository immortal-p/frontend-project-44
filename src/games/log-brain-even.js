import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getCorrectAnswer = (num) => {
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return expectedAnswer;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => playBrainGame(description, generateRandomNum, 0, 50, getCorrectAnswer);

export default runBrainEven;

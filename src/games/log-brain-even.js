import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const expectedAnswer = isEven(num) ? 'yes' : 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => playBrainGame(description, generateRandomNum, 0, 50, expectedAnswer);

export default runBrainEven;

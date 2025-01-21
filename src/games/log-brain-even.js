import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const isEvenAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => playBrainGame(gameDescription, generateRandomNum, 0, 50, correctAnswer);

export default runBrainEven;

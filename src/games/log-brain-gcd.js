import generateRandomNum from '../random-num.js';
import BrainGame from '../BrainGame.js';

const findGCD = (paif) => {
  const arrPaif = paif.split(' ');
  let a = arrPaif[0];
  let b = arrPaif[1];
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const genRandomNums = (min, max) => {
  const a = generateRandomNum(min, max);
  const b = generateRandomNum(min, max);
  const nums = `${a} ${b}`;
  return nums;
};

const gcdGame = new BrainGame({
  description: 'Find the greatest common divisor of given numbers.',
  generateQuestion: genRandomNums,
  getCorrectAnswer: findGCD,
  rangeMin: 10,
  rangeMax: 50,
})

export default gcdGame.run.bind(gcdGame);


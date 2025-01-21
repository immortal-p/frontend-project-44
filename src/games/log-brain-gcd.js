import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

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

const generateRandomNums = (min, max) => {
  const a = randomNum(min, max);
  const b = randomNum(min, max);
  const result = `${a} ${b}`;
  return result;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runBrainGcd = () => randomTask(gameDescription, generateRandomNums, 10, 50, findGCD);

export default runBrainGcd;

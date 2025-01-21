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
  const a = generateRandomNum(min, max);
  const b = generateRandomNum(min, max);
  const nums = `${a} ${b}`;
  return nums;
};

const description = 'Find the greatest common divisor of given numbers.';

const runBrainGcd = () => playBrainGame(description, generateRandomNums, 10, 50, findGCD);

export default runBrainGcd;

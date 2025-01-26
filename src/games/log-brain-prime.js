import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

function generateRandomN(min, max) {
  return generateRandomNum(min, max);
}

const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const min = 0;
const max = 30;

const runBrainPrime = () => playBrainGame(description, generateRandomN, min, max, isPrime);

export default runBrainPrime;

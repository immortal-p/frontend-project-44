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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const runBrainPrime = () => playBrainGame(gameDescription, generateRandomN, 0, 30, isPrime);

export default runBrainPrime;

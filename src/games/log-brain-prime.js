import randomNum from "../random-num.js";
import { randomTask } from "../index.js";

function randomN(min, max) {
  return randomNum(min, max);
}

const isPrime = (num) => {
  if (num <= 1) return "no";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return "no";
  }

  return "yes";
};

const textQust = `Answer "yes" if given number is prime. Otherwise answer "no"`;

const runBrainPrime = () => {
  randomTask(textQust, randomN, 0, 30, isPrime);
};

export default runBrainPrime;
